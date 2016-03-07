# Observer Transport Defaults #

You can create, update and delete default transports of each type for an application. These default observers will populate the blank fields of Observers on broadcasting. Defaults make it possible to include information such as HostNames in observers without exposing them to other developers and users who have access to the observers themselves.

All of the fields that can be set on a normal Transport can have a default (See the [Transport documentation](#/content/cms.PUSHBasics.Transports) for more information). Each transport type can only have one default.

Check out the default endpoint in our [PUSH configuration documentation](#/rest-list/PUSH/Configurations)

If a field is not set on an Observer's transport it will automatically look for a default transport for that app and if one is found be set to that of the default.

Example:

	Default Transport:
	{
	    "TransportType" : "HttpPost",
	    "Address" : "https://moj.io",
	    "UserName" : "Mojio",   
	}
	
	Observer Request Transport:
	{
	    "TransportType" : "HttpPost",
	    "UserName" : "Admin",
	    "Password" : "Pa$$word",   
	}

	Resulting Observer Transport:
	{
	    "TransportType" : "HttpPost",
	    "Address" : "https://moj.io",
	    "UserName" : "Admin",   
	    "Password" : "Pa$$word",
	}

