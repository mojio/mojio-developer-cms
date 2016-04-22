## Getting Started ##

The push observers provide a mechanism to register for realtime notifications of changes to a Mojio, vehicle, or user.  Observers can be configured to trigger on every update or only when specific conditions are met.  Timing intervals, and debouncing rules can also be used to refine how often data is sent. 

There are two main concepts to creating and managing observers.  First is the creation of the observer rules (what and when should the observer be triggered).  Second is adding one or more transports to the observer.

### Getting Started ###

The push APIs are separate from the standard REST API.  Instead all requests should be sent to https://push.moj.io/. All requests will require a valid Authorization header bearer token (see [Authorization](#/content/cms.GettingStarted.4-Authorization)).

Visit the Push API [documentation](#/rest-list/PUSH/Configurations) to play around with the API.

### Creating an Observer ###

To create or update an observer perform a PUT request to https://push.moj.io/v2/{resource}/{key}

#### Example Request ####
```
PUT https://push.moj.io/v2/{resource}/{key}
{
  "Fields": [
    "Name", "Speed"
  ],
  "Conditions": "Speed gt 50",
  "Debounce": 4,
  "Throttle": "15:00",
  "Timing": "High",
  "TimeToLive": "1:00"
}
```

#### Fields ####

To save on bandwidth, a subset of fields to be transmitted can be defined.  Leave this empty to receive the full stream.

#### Conditions ####

A condition string to filter notifications by.  Example: "Speed.Value gt 50"

#### Timing ####

Based on the evaluation of a condition, Timing is used to determine if a notification should be sent.

| Timing | Description |
|---|---|
| High | Observer will trigger everytime the condition is met. This is the default behaviour. |
| Change | Observer will fire when the condition evaluation changes (true to false, false to true) |
| Enter | Observer will only fire when the condition changes from false to true. |
| Exit | Observer will only fire when the condition changes from true to false. |

#### Debounce ####

Debouncing is a technique to mitigate the effects of noise in data.  By specifying a debounce value along with your conditions, a notification will only be sent once the condition is met for the defined number of consecutive data points.

#### Throttle ####

A vehicle can send a lot of data as it's driving.  There is a good chance you don't want it all, all the time.  Throttle can be used to limit the number of messages we send by silencing notifications that are to soon after another.  For example, if you want fuel level a maximum of once every 10 minutes.

#### TimeToLive ####

Dispite our best efforts to always provide realtime vehicle data, the reality is, sometimes communication can be delayed.  If the notification only makes sense when it's in realtime, a TimeToLive can be set to ignore out-dated messages.

### Transports ###

Once you have conditions set for your observer, you can add one or more transports.  Each transport has different set of properties specific, and rules around validation and cleanup.

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
