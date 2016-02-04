var fs = require('fs'),
    path = require('path');

toHash = function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}

var AllNodes={};
function readConfig(configFile) {
    if(fs.existsSync(configFile)) {
        return JSON.parse(fs.readFileSync(configFile, 'utf8'));
    }
    else { return null; }
}
function setConfig(moreinfo, info, path) {
    for (attrib in moreinfo) {
        if (path != null && attrib == "templateURI") {
            moreinfo["templateURI"] = path + "/" + moreinfo["templateURI"];
        }
        if(typeof(moreinfo[attrib])=="object" && typeof(info[attrib])!="undefined")
        {
            // Add Child attribute to info

            for (childattrib in moreinfo[attrib])
                info[attrib][childattrib] = moreinfo[attrib][childattrib];
        }
        else {
            info[attrib] = moreinfo[attrib];
        }
    }
}
function dirTree(filename,lvl,parent) {

    var stats = fs.lstatSync(filename);
    var cpath = path.dirname(filename);

    if (cpath.substring(0, 3) == "../")
        cpath = cpath.substring(3);

    var FileExt = path.extname(filename);
    var FileName = path.basename(filename);
    var FileNameWithoutExt=FileName.substring(0,FileName.length-FileExt.length);

    var Title = FileNameWithoutExt.split('_').splice(0, 1).join(' ').split('.')[0];

    var info = {
        "order":0,
        "path": cpath,
        "icon": "fa-file-o",
        "title": Title,
        "name": FileName,
        "status": "expand",
        "children": [],
        "level": lvl,
        "description":"",
        "templateURI":"",
        "templateType":"jade",
        "templateContent":"",
        "data":{},
        "parent":parent,
        "breadcrumbs":true,
        "leftMenu":{
            "menuClass":"",
            "menuNodeClass":"",
            "viewMode": "treeview",
            "source": "children",
            "columns":"4",
            "offset":"0"
        },
        "main":{
            "class":"",
            "offset":"0",
            "columns":"8"
        },
        relativePath: null
    };

    var NodeId='node' + toHash(info.path + "/" + info.name);
    // read the specific data config file.
    var configFile=info.path + "/" +FileName + "/config.json"
    var moreinfo = readConfig(configFile)
    if (moreinfo != null) {
        // look for common config information and over write any specific config.
        if (moreinfo.config != undefined && moreinfo.config != null ) {
            commonConfigFile=info.path + "/" + moreinfo.config + "/config.json";
            commonInfo = readConfig(commonConfigFile);
            setConfig(commonInfo, info, moreinfo.relativePath);
        }
        else {
            moreinfo.config = null;
        }
        setConfig(moreinfo, info, moreinfo.relativePath)
    }

    var files = fs.readdirSync(filename);
    for (var i in files) {
        var childfile=filename + '/' + files[i];

        var childStat = fs.lstatSync(childfile);

        if (!childStat.isDirectory() || files[i][0]==".")
            continue;

        var ChildId=dirTree(childfile, lvl + 1,NodeId)
        info.children.push(ChildId);
    }

    AllNodes[NodeId]=info;

    return NodeId;
}

if (module.parent == undefined) {
    // node dirTree.js ~/foo/bar
    var util = require('util');
    dirTree(process.argv[2],0,"");

    console.log(JSON.stringify(AllNodes, false, null));
}