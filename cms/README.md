# README #

This README would normally document whatever steps are necessary to get your application up and running.

### Build ###

  node cms/prepare.js cms >cms/menu.js


### Config file structure ###


	{
	    "order":0,  // number
	    "icon": "fa-file-o", // string
	    "title": "Title", // string
	    "status": "expand", // [expand] [collapse]
	    "description":"Description", // string
	
	    "templateURI":"template.jade" , // template (or view) file
	    "templateType": "jade" // [jade] [HTML] [markdown]
	    "templateContent": "" // Embeding template directly. only HTML template supported
	
	    "breadcrumbs":true, // boolean , show/hide breadcrumbs
	
	    "leftMenu":{
	        "viewMode": "none", // [none] [list] [treeview] [tile]
	        "source": "children" // [children] [root] [level]
	    },
	    "mainMenu":{
	        "viewMode": "none" // [none] [list] [treeview] [icon]
	    },
	    "data":{
	      // any valid JSON Data to render with template (view)
	    }
	}
