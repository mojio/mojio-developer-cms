# Transports #

### Android ###
 Used to set up push notifications through Google Cloud Messaging on an Android device.

	"Transport"{
	   "TransportType": "Android",
	   "DeviceRegistrationId": "string",
	}

**DeviceRegistrationId**: (Required) The Id used to register the device to the google server.


### Apple ###
  Used to set up notification for Apple devices on the Apple Push Notification Service. See the Apple Push Notification Service documentation for more information.

	"Transport"{
	   "TransportType": "Apple",
	   "DeviceToken":"string",
	   "AlertBody": "string",
	   "AlertSound": "string",
	   "AlertCategory": "string",
	   "Badge": 0,
	   AppId: "string",
	}

**DeviceToken**: (Required) The device token is analogous to a phone number; it contains information that enables APNs to locate the device on which the client app is installed.

**AlertBody**: (Optional) An alert message to display to the user.

**AlertSound**: (Optional) A sounds to play.

**AlertCategory**: (Optional) Used to categorize the notification.

**AlertBadge**: (Optional) A number to badge the app icon with.

**AppId**: (Required) The Apple Application Id.


### HttpPost ###
Used to set up notifications via Http Post.

	"Transport"{
	   "TransportType": "HttpPost",
	   "Address":"string",
	   "UserName": "string",
	   "Password": "string"
	}

**Address**: (Required) The Uri address the notification should be sent to. This must be on the list of validated host names. To validate a host name see the configs/{id}/httppost/host endpoint.

**UserName**: (Optional) Can be used for authentication.
Password: (Optional) Can be used with UserName for authentication.


### MongoDB ###
Saves entity that is broadcast to MongoDB.

	"Transport"{
	   "TransportType": "MongoDB",
	   "ConnectionString":"string",
	   "CollectionName": "string",
	   "Identifier": "Default"
	}

**ConnectionString**: (Required) The string to connect to the Mongo Database.

**CollectionName**: (Required) the name of the collection to save the entity to.

**Identifier Type**: How to identify the entity within the new Mongo database.

**Options**: Default, Id or Guid

- **Default**: Creates a new ObjectId to identity the entity for each broadcast. This means if an entity is broadcast more than once it will not be overwritten there will instead be an entry for each state of the entity.
- **Id**: Uses the MojioId, which is a Guid, to identify the object within the database. This means that an old entry for entity will be overwritten by a new broadcast.
- **Guid**: Creates a new Guid to identity the entity for each broadcast. This means if an entity is broadcast more than once it will not be overwritten there will instead be an entry for each state of the entity. 


### Mqtt ### 

	"Transport"{
	   "TransportType": "Mqtt",
	   "HostName":"string",
	   "Port": 0,
	   "ClientId": "string"
	   "Topic":"string",
	   "UserName": string,
	   "Password": "string"
	}

**HostName**: (Required) The host name.

**Port**: (Required) The port to connect to.

**ClientId**: (Required)

**Topic**: (Required)

**UserName**:

**Password**:


### SignalR ###
	
	"Transport"{
	   "TransportType": "SignalR",
	   "ClientId": "string"
	   "HubName":"string",
	   "Callback": string
	}

**ClientId**:
**HubName**:
**Callback**:

