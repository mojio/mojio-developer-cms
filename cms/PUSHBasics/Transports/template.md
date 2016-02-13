# Transports #

### Android ###
 Used to set up push notifications through [Google Cloud Messaging](https://developers.google.com/cloud-messaging/) on an Android device.

	"Transport"{
	   "TransportType": "Android",
	   "DeviceRegistrationId": "string",
	}

**DeviceRegistrationId** (Required): The Id used to register the device to the Google server.


### Apple ###
  Used to set up notification for Apple devices on the [Apple Push Notification](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html) Service. See the Apple Push Notification Service documentation for more information.

	"Transport"{
	   "TransportType": "Apple",
	   "DeviceToken":"string",
	   "AlertBody": "string",
	   "AlertSound": "string",
	   "AlertCategory": "string",
	   "Badge": 0,
	   AppId: "string",
	}

**DeviceToken** (Required): The device token is analogous to a phone number; it contains information that enables APNs to locate the device on which the client app is installed.

**AlertBody** (Optional): An alert message to display to the user.

**AlertSound** (Optional): A sound to play.

**AlertCategory** (Optional): Used to categorize the notification.

**AlertBadge** (Optional): A number to badge the app icon with.

**AppId** (Required):  The Apple Application Id.


### HttpPost ###
Used to set up notifications via Http Post.

	"Transport"{
	   "TransportType": "HttpPost",
	   "Address":"string",
	   "UserName": "string",
	   "Password": "string"
	}

**Address** (Required): The URI that the notification should be sent to. This must be on the list of validated host names. To validate a host name see the [configs/{id}/httppost/host](https://push.moj.io/swagger/ui/index#!/Configurations/Observer_GetAuthorizedHosts) endpoint.

**UserName** (Optional): Can be used for authentication.
Password: (Optional) Can be used with UserName for authentication.


### MongoDB ###
Used to setup streaming to a MongoDB instance.

	"Transport"{
	   "TransportType": "MongoDB",
	   "ConnectionString":"string",
	   "CollectionName": "string",
	   "Identifier": "Default"
	}

**ConnectionString** (Required): The string to connect to the Mongo Database.

**CollectionName** (Required):  the name of the collection to save the entity to.

**Identifier Type**: How to identify the entity within the new Mongo database. Can be Default, Id or Guid.

- **Default**: Creates a new ObjectId to identify the entity for each broadcast. This means if an entity is sent more than once it will not be overwritten there will instead be an entry for each state of the entity.

- **Id**: Uses the MojioId, which is a Guid, to identify the object within the database. This means that an old entry for entity will be overwritten by a new broadcast.

- **Guid**: Creates a new Guid to identify the entity for each broadcast. This means if an entity is sent more than once it will not be overwritten there will instead be an entry for each state of the entity. 


### Mqtt ###
Used to setup streaming to a MQTT instance.

	"Transport"{
	   "TransportType": "Mqtt",
	   "HostName":"string",
	   "Port": 0,
	   "ClientId": "string"
	   "Topic":"string",
	   "UserName": string,
	   "Password": "string"
	}

**HostName** (Required): Hostname of the MQTT broker to connect to. 

**Port** (Required): Port number of the MQTT broker to connect to. 

**ClientId** (Required): MQTT client ID to use.

**Topic** (Optional): The topic to publish to.

**UserName** (Optional): Username used when authenticating to the MQTT broker. 

**Password** (Optional): Password used when authenticating to the MQTT broker. 


### SignalR ###
Connect to SignalR and broadcast messages.
	
	"Transport"{
	   "TransportType": "SignalR",
	   "ClientId": "string"
	   "HubName":"string",
	   "Callback": string
	}

**ClientId** (Required): The Id of the client to connect to.

**HubName** (Required): The name of the hub to connect to.

**Callback** (Optional): The callback to be used for a response.

