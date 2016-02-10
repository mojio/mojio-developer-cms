# Off to the races! #

Welcome to Mojio University! We'll walk you through the basics of the Mojio Platform so you can get started building your very own connected car apps! We at Mojio use this very same API to build our own apps.

### The Ground Rules ###

Mojio gives you access to a great deal of data about the driver and their vehicle. The intent here is that you will create apps and services to improve the end user experience. We ask that you respect the end user, their overall app experience, and most importantly, their privacy.

Driving while distracted is now a leading cause of accidents. We're building the connected car to improve the overall user experience - please do so with safety in mind. Unlike other apps, Mojio apps know when the driver is behind the wheel. Please take extra care in ensuring that you do not distract the user when their focus should be on the road.

Finally, we want to help you build great apps. Our success is dependent on it. If there is anything we can do to make it easier to build car connected apps, please reach out to the Mojio team. 

In summary:

* Respect user privacy.
* Consider driver safety when designing your apps.
* Provide a great end user experience.
* Build great car connected apps!

### API Endpoints ###

The Mojio REST APIs are supported for testing and live data in a single production environment and are connected to using OAuth2. There are two versions of the API, v1 and v2. We recommend using v2 it has most of the same features as v1 plus a bunch of cool new functionality that will make your apps even better! We'll only talk about Version two from here on out check out more [developer.moj.io](https://developer.moj.io) for more information on version 1. Version two is further divided into the REST and PUSH APIs. 

	REST Base URI for Version 2: https://api.moj.io/v2/

 The Push API for is for subscribing to live events. This can be used  to create observers for vehicles, users and Mojios that send notifications when certain changes occur.

    Push Base URI for Version 2: https://push.moj.io/v2/

A complete endpoint is formed by combining the REST verb with the full URI to the resource you are addressing.

To create a complete request, combine the endpoint with the appropriate HTTP headers and your JSON payload. You can try out the REST api here: 
[https://api.moj.io/swagger/](https://api.moj.io)

And you can try out the Push API here: 
[https://push.moj.io/swagger/](https://push.moj.io/swagger/)

Many of the API calls require an authorization header to be included in the request see our [ Authorization section](#/content/cms.Getting_Started.Authorization) to find out more.



### Routing ###

The routing is:

	<HTTP method> <Base URL>/v<version number>/<controller>/<optional entity id>?param1=value1&param2=value2&...

The Mojio API supports true REST-based HTTP methods, i.e.: GET, POST, PUT, DELETE, etc.

### Controllers ###

The current controllers for v2 are as follows:

    Apps - manage your apps
    Groups - manage your groups
    Mojios - manage your Mojio(s)
    Trips - retrieve and filter on trips you’ve made
    Users - manage your account
    Vehicles - manage your vehicle(s)

The Push controllers are:

    Configs - update configurations for observers
    Mojios - register and manage your observers for Mojios
    Users - register and manage your observers for users
    Vehicles - register and manage your observers for vehicles

### Next steps ###

Check out [Creating my First Application](#/content/cms.Getting_Started.Creating_an_Application) to get started...
