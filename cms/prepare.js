var fs = require('fs'),
    path = require('path');

toHash = function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}

var AllNodes={};

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
            "viewMode": "treeview",
            "source": "children"
        },
        "mainMenu":{
            "viewMode": "icon",
            "source": "children"
        }

    };

    var NodeId='node' + toHash(info.path + "/" + info.name);


    var configFile=info.path + "/" +FileName + "/config.json"
    if(fs.existsSync(configFile)){
        var moreinfo = JSON.parse(fs.readFileSync(configFile, 'utf8'));
        for (attrib in moreinfo)
            info[attrib]=moreinfo[attrib]
    }

    var files = fs.readdirSync(filename);
    for (var i in files) {
        var childfile=filename + '/' + files[i];

        var childStat = fs.lstatSync(childfile);
        if (!childStat.isDirectory())
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