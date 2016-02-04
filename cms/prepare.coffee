fs = require('fs')
path = require('path')

toHash = (s) ->
    return s.split("")
        .reduce(
            (a,b) ->
                a=((a<<5)-a)+b.charCodeAt(0)
                return a&a
            ,0
        )

AllNodes={}
readConfig = (configFile) ->
    if(fs.existsSync(configFile))
        return JSON.parse(fs.readFileSync(configFile, 'utf8'))
    else
        return null

setConfig = (moreinfo, info, path) ->
    for attrib,value of moreinfo
        if (path? and attrib == "templateURI")
            moreinfo["templateURI"] = path + "/" + moreinfo["templateURI"];

        if(typeof(moreinfo[attrib])=="object" and typeof(info[attrib])!="undefined")
            # Add Child attribute to info
            for childattrib, value of moreinfo[attrib]
                info[attrib][childattrib] = moreinfo[attrib][childattrib];
        else
            info[attrib] = moreinfo[attrib];

    return null

dirTree = (filename,lvl,parent) ->

    # stats = fs.lstatSync(filename)
    cpath = path.dirname(filename)

    if (cpath.substring(0, 3) == "../")
        cpath = cpath.substring(3)

    FileExt = path.extname(filename)
    FileName = path.basename(filename)
    FileNameWithoutExt=FileName.substring(0,FileName.length-FileExt.length)

    Title = FileNameWithoutExt.split('_').splice(0, 1).join(' ').split('.')[0]

    info = {
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
    }

    NodeId='node' + toHash(info.path + "/" + info.name)
    # read the specific data config file.
    configFile=info.path + "/" +FileName + "/config.json"
    moreinfo = readConfig(configFile)
    if (moreinfo != null)
        # look for common config information and over write any specific config.
        if (moreinfo.config != undefined && moreinfo.config != null)
            commonConfigFile=info.path + "/" + moreinfo.config + "/config.json"
            commonInfo = readConfig(commonConfigFile)
            setConfig(commonInfo, info, moreinfo.relativePath)

        else
            moreinfo.config = null

        setConfig(moreinfo, info, moreinfo.relativePath)

    files = fs.readdirSync(filename)
    for k,v of files
        childfile=filename + '/' + files[k];

        childStat = fs.lstatSync(childfile);

        if (!childStat.isDirectory() || files[k][0]==".")
            continue

        ChildId=dirTree(childfile, lvl + 1,NodeId)
        info.children.push(ChildId)

    AllNodes[NodeId]=info
    return NodeId

if (!module.parent)
    # node dirTree.js ~/foo/bar
    util = require('util')
    dirTree(process.argv[2],0,"")
    console.log(JSON.stringify(AllNodes, false, null))
