Observers can be used to monitor changes in Mojios, Vehicles and Users.

To play around with our Push API check out our [swagger documentation](https://push.moj.io/swagger).

	Observer
	{
	   "Key": "string",
	   "CreatedOn": "2015-10-13T16:49:21.094Z",
	   "LastModified": "2015-10-13T16:49:21.094Z",
	   "ExpiryDate": "2015-10-13T16:49:21.094Z",
	   "Name": "string",
	   "Type": "string",
	   "Subject": "string",
	   "Fields": [
	      "string"
	    ],
	    "Transports": [
	       {
	          "TransportType": "Android",
	          "Destination": "string"
	       }
	    ],
	    "Conditions": [
	       {}
	    ]
	}

**Type**: The Type of entity that is being observed. Either **mojio**, **vehicle** or **user**. This is automatically set on creation and cannot be edited.

**Subject**: The Id of the entity that is being observed. If an entity Id is not passed in when creating an observer it will broadcast changes for all entities of that type that the user has read permissions for.  If an Id is passed in it becomes the Subject on the observer. This is automatically set on creation and cannot be edited.

**Key**: (Required) The only required field when creating an observer is the Key. This value is something which you will create and is used for you to uniquely identify your observer; it must be unique for the user, application and entity.  It cannot be edited.

**Fields**: The Fields property specifies what fields of the entity will be broadcast when a change occurs. When creating or updating an Observer passing in an empty array or null will default to all fields the user has permission for. 

**[Transport](#/content/cms.PUSHBasics.Transports)**: The transport is not a required field when creating an Observer, but without it the Observer won't do anything! There are a number of different types of transports and each requires a unique set of properties. Each observer should only have one transport. If defaults  have been set for a specific transport type they will automatically copied over to the transport.

**It should be noted that all fields that are not specified on the transport will be filled with the default values if they are available. So required fields are not required if that value has been specified in the [default transport](#/content/cms.PushBasics.Defaults).**

Transport Types:


- Android
	- Send push notifications to Android Devices
- Apple
	- Send push notifications to Apple Devices
- HttpPost
	- Stream data directly to your services, via HTTP
- MongoDB
	- Stream data directly to your own [MongoDB](https://www.mongodb.org/) instance
- Mqtt
	- Stream data directly to your own [MQTT](http://mqtt.org/) instance
- SignalR
	- Send push notifications to your browser via [SignalR](http://www.asp.net/signalr/overview/getting-started/introduction-to-signalr)

   
**[Conditions](#/content/cms.PushBasics.Conditions)**: There are 4 types of conditions that can limit the behavior of an Observer. An Observer can have up to 4 Conditions, one of each type. If none of these are set the Observer will broadcast a message anytime the entity changes in any way.

Condition Types:

- PropertyChanged
- Threshold
- Debounce
- Throttle

**ExpiryDate**: The expiration is based off of the token expiry time. So if someone signs out and signs back in the expiration time will be extended. Expiration cannot be manually edited.
