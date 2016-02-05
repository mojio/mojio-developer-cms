### Grouping ###

Groups can be a useful way to organize users and grant access simply and effectively

Group:
	
	"Group":  {
	   "Name" : "string",
	   "Description" : "string",
	   "Users" : [
	       "string"  
	    ]
	}

A Group has a name a description and a list of GUIDs that represent UserIds.

If a user is a part of a group that is included in an access rule they have the permissions that are on that access rule. 

TODO: Preset groups? 
