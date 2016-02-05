### Access and Sharing ###
Permissions on the Mojio Platform allows a user to grant groups of users access to their resources.

To grant a group of users access to a resource:

1. Create a new group (POST v2/groups/)
2. Add to the group the user or users you want grant access to (POST v2/groups/{id}/users)
3. Grant the group access to the resource (POST v2/{resource/{id}/permissions}


All the major entities have a list of AccessRules on them.  This list of access rules indicates who can view what parts of the entity. Access to an entity can be granted to a user simply by adding their UserId to one of the groups whose GroupId appears in the 3ntity's access rules.
	
	"AccessRules" : [
	   "AccessRule" :
	   {
	      "GroupId" : "string",
	      "Permissions" : [
	         "string"
	      ]
	   }
	]

**AccessRule:** Contains a GroupId that corresponds to a Group, and a list of Permissions.

**Permissions:** Permissions scopes are characterized by a string of the form:  Action:Resource:Property with resource and property being optional (resource is required if property is included).  Action is a flag of enums.   (ex: read:user:firstname  or read,write:user:email or read,write:user) Some actions are a combination of other actions to make granting permissions easier. 

**Action:**

* None
* Read
* Write
* Create
* Delete
* Share
* Restricted (Special permission for certain calls, such as getting an application's secret key)
* RW = Read & Write
* Full = RW & Share
* Admin = Full & Restricted
* Owner/All = Everything but None (Cannot be granted to a user is added upon creation of entity)


Example:

	"AccessRules" : [
   		"AccessRule" :
   		{
      		"GroupId" : "string",
      		"Permissions" : [
				"none:user",
				"read:mojio",
				"read:vehicle:location",
				"rw:vehicle:name",
				"share:vehicle:vin",
				"write:vehicle:tags",
				"full:trip"
      		]
   		}
	]

These access rules are also inherited in so far as when a Mojio is claimed the access rules on the user is applied to the Mojio. When a Mojio recognizes and creates a new vehicle the access rules from the Mojio are applied to the vehicle. And all new trips generated get the access rules from the vehicle. User > Mojios > Vehicles > Trips. 

So for example if I add the following access rule on a Vehicle any new Trips that are created for this vehicle will have the same access rule so anyone in the group will be able to read all properties of the Trip.

	"AccessRules" : [
	   		"AccessRule" :
	   		{
	      		"GroupId" : "string",
	      		"Permissions" : [
					"read",
					"write:vehicle:name",
					"share:vehicle:vin",
	      		]
	   		}
		]


This inheritance does not apply to past entities. So if I grant you Read access to my Vehicle you cannot see any of my past trips unless I explicitly grant it to you, but any new trips my vehicle generates you will have read access for. 

Deleting permissions from a resource removes access to them. (DELETE v2/{resource}/{id}/permissions)

Revoking access does not revoke it for all the children. For example if I change your access to my vehicle from Read to None the trips that were generated while you had Read access will still be viewable, unless I explicitly revoke your access to each one individually. 
