[Purpose: More Technical overview of the APIs]

You, as a developer, can connect to the Mojio Platform through our [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) and PUSH APIs to build your very own connected car apps.  We at Mojio use the very same APIs to build our own apps so you can rest assured that they are battle tested and ready!

### API Endpoints ###

Our REST and PUSH APIs can be used for testing and live access to data in a single production environment.  Authentication is handled through OAuth2. There are two versions of the APIs, Version 1 (v1) and Version 2 (v2). We recommend using v2 it has most of the same features as v1 plus a bunch of cool new functionality that will make your apps even better! We'll only talk about v2 from here on out check out [developer.moj.io](https://developer.moj.io) for more information on v1. V2 is further divided into the REST API and PUSH API. 

	REST Base URI for Version 2: https://api.moj.io/v2/

The Push API is for subscribing to live events. This can be used  to create observers for Vehicles, Users and Mojios that send notifications when certain changes occur.

    Push Base URI for Version 2: https://push.moj.io/v2/

A complete endpoint is formed by combining the REST verb with the full URI for the resource you are addressing.

To create a complete request, combine the endpoint with the appropriate HTTP headers and your JSON payload. You can try out the REST API here: 
[https://api.moj.io/swagger/](https://api.moj.io)

And you can try out the Push API here: 
[https://push.moj.io/swagger/](https://push.moj.io/swagger/)

Many of the API calls require an authorization header to be included in the request see our [Authorization section](#/content/cms.GettingStarted.4-Authorization) to find out more.

### Routing ###

The routing is:

	<HTTP method> <Base URL>/v<version number>/<controller>/<optional entity id>?param1=value1&param2=value2&...

The Mojio API supports true REST-based [HTTP methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods), for example: GET, POST, PUT, DELETE, and so on.


### Controllers ###

The current controllers for v2 are as follows:

- Apps: manage your apps
- Groups: manage your groups
- Mojios: manage your Mojio(s)
- Trips: retrieve and filter on trips you’ve made
- Users: manage your account
- Vehicles: manage your vehicle(s)

The Push controllers are:

- Configs: update configurations for observers
- Mojios: register and manage your observers for Mojios
- Users: register and manage your observers for users
- Vehicles: register and manage your observers for vehicles

### Next steps ###

[The first step in connecting to the APIs is creating a Mojio App >](#/content/cms.GettingStarted.3-CreateAnApplication)
