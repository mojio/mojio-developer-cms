# Transports #

## Android ##

Used to set up push notifications through [Google Cloud Messaging](https://developers.google.com/cloud-messaging/) on an Android device.

```json
{
	"Type": "Android",
	"DeviceRegistrationId": "string",
}
```

**DeviceRegistrationId** (Required): The Id used to register the device to the Google server.


## Apple ##

Used to set up notification for Apple devices on the [Apple Push Notification](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html) Service. See the Apple Push Notification Service documentation for more information.

```json
{
	"Type": "Apple",
	"DeviceToken":"string",
	"AlertBody": "string",
	"AlertSound": "string",
	"AlertCategory": "string",
	"ContentAvailable": "bool",
	"Badge": 0
}
```

**DeviceToken** (Required): The device token is analogous to a phone number; it contains information that enables APNs to locate the device on which the client app is installed.

**AlertBody** (Optional): An alert message to display to the user.

**AlertSound** (Optional): A sound to play.

**AlertCategory** (Optional): Used to categorize the notification.

**Badge** (Optional): A number to badge the app icon with.

**ContentAvailable** (Optional): Whether to include the content-available flag.


## HttpPost ##

Used to set up notifications via Http Post.

```json
{
	"Type": "HttpPost",
	"Address":"string",
	"UserName": "string",
	"Password": "string"
}
```

**Address** (Required): The URI that the notification should be sent to. This must be on the list of validated host names. To validate a host name see the [configs/{id}/httppost/host](https://push.moj.io/swagger/ui/index#!/Configurations/Observer_GetAuthorizedHosts) endpoint.

**UserName** (Optional): Can be used for authentication.
Password: (Optional) Can be used with UserName for authentication.


## MongoDB ##

Used to setup streaming to a MongoDB instance.

```json
{
	"Type": "MongoDB",
	"ConnectionString":"mongodb://username:password@my-host.com:9999/db",
	"CollectionName": "Vehicles",
	"Identifier": "Default"
}
```

**ConnectionString** (Required): The string to connect to the Mongo Database.

**CollectionName** (Required):  the name of the collection to save the entity to.

**Identifier Type**: How to identify the entity within the new Mongo database. Can be Default, Id or Guid.

- **Default**: Creates a new ObjectId to identify the entity for each broadcast. This means if an entity is sent more than once it will not be overwritten there will instead be an entry for each state of the entity.

- **Id**: Uses the MojioId, which is a Guid, to identify the object within the database. This means that an old entry for entity will be overwritten by a new broadcast.

- **Guid**: Creates a new Guid to identify the entity for each broadcast. This means if an entity is sent more than once it will not be overwritten there will instead be an entry for each state of the entity. 


## Mqtt ##
Used to setup streaming to a MQTT instance.

```json
{
	"Type": "Mqtt",
	"HostName":"example.com",
	"Port": 4469,
	"Topic":"vehicles",
	"ClientId": "my-client-name",
	"UserName": "my-user",
	"Password": "my-password"
}
```

**HostName** (Required): Hostname of the MQTT broker to connect to. 

**Port** (Required): Port number of the MQTT broker to connect to. 

**Topic** (Required): The topic to publish to.

**ClientId** (Optional): MQTT client ID to use. Defaults to "mojio-v2-api"

**UserName** (Optional): Username used when authenticating to the MQTT broker. 

**Password** (Optional): Password used when authenticating to the MQTT broker. 


## Websockets ##

There is a websocket implementation that hooks directly into the v2 API server.  Instead of hitting https://api.moj.io/v2/{resource}/{vehicle_id} to fetch a single state of a resource, a websocket connection can be opened to receive live updates to the resource.

### Available Websocket Endpoints ###

* wss://api.moj.io/v2/vehicles?filter={conditions}
* wss://api.moj.io/v2/mojios?filter={conditions}
* wss://api.moj.io/v2/vehicles/{vehicle_id}
* wss://api.moj.io/v2/mojios/{mojio_id}

## SignalR ##

Connect to SignalR and receive broadcasted messages.

The signalR endpoint is `https://push.moj.io/signalr`.  The available hubs are **VehicleHub** and **MojioHub**, with two possible methods to invoke on each.  You must send a valid access token through the **Authorization** header, or via query parameter in order to authorize every signalR method.

### Available Methods ###

**Observe** (Guid id, string key = null, string callback = null, string[] fields)
 * ID is the specific vehicle or Mojio you wish to observe (depending on the hub)
 * KEY is optional descriptor for the observer.  [Default: "signalr-observer-one-{ID}"]
 * CALLBACK is the SignalR event callback invoked on new message. [Default: "[Vehicle|Mojio]{KEY}"]
 * FIELDS is an array of fields to send.  [Default: ALL fields will be sent]
   
**ObserveAll** (string where = null, string key = null, string callback = null, string[] fields)
 * WHERE is the filter condition that must match in order to fire the observer.
 * KEY is optional descriptor for the observer.  [Default: "signalr-observer-all-[Mojio|Vehicle]s"]
 * CALLBACK is the SignalR event callback invoked on new message. [Default: "[Vehicle|Mojio]{KEY}"]
 * FIELDS is an array of fields to send.  [Default: ALL fields will be sent]

### Example Usage ###

```javascript
hub = client.getHub("VehicleHub");
hub.qs = { "MojioAPIToken": "my-access-token" }
hub.Observe(vehicleId, "my-custom-signalr", "customCallback", ["Name", "Speed"])
hub.on("customCallback", function(vehicle) {
	// I have a vehicle update!  whoooh
});
```
