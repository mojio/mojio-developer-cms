 # Mojio API #

Mojio's technology allows developer's to access information about vehicles via OBD ports without having to know anything about OBD technologies or the devices that gather telematic information. Mojio abstracts data from telematics control units attached to the OBD port into Vehicle and Device objects.

### The Ground Rules ###
Mojio gives you access to a great deal of data about the driver and their vehicle. The intent here is that you will create apps and services to improve the end user experience. We ask that you respect the end user, their overall app experience, and most importantly, their privacy.

Driving while distracted is now a leading cause of accidents. We're building the connected car to improve the overall user experience - please do so with safety in mind. Unlike other apps, Mojio apps know when the driver is behind the wheel. Please take extra care in ensuring that you do not distract the user when their focus should be on the road.

Finally, we want to help you build great apps. Our success is dependent on it. If there is anything we can do to make it easier to build car connected apps, please reach out to the Mojio team.

In summary:

Respect user privacy.
Consider driver safety when designing your apps.
Provide a great end user experience.
Build great car connected apps!

### API Endpoints ###

The Mojio REST APIs are supported in testing-only sandbox environment and a production environment and are connected to using OAuth2.

From time to time, we may flush the sandbox database so please be aware that your data on this environment is volatile.

When registered, apps are issued secret keys for both the sandbox and production environment, but these should only be used for server-to-server applications or when using the deprecated SDKs (which is not recommended).

Developer Center: https://developer.moj.io/dashboard/
REST Base URI: https://api.moj.io/v1/
A complete endpoint is formed by combining the REST verb with the full URI to the resource you are addressing.

For example, here is the endpoint you would use in a request to get the models for the API:

[GET https://api.moj.io/v1/Schema/List](https://api.moj.io/v1/Schema/List)

Or let's get the schema for one of the models:

[GET https://api.moj.io/v1/Schema?entityType=Vehicle](https://api.moj.io/v1/Schema?entityType=Vehicle)

### Authentication ###

Many of the API calls require an authorized user to be associated with the SDK requests. After a user successfully logs in a Token object will be returned that contains a token id (GUID), which must be sent in all subsequent HTTP request headers in the field "MojioAPIToken".

You can view a Token's schema by typing "Token" into the entityType field in the Schema section of the REST API Documentation.

Tokens are either for the Sandbox or Production environment, and have an expiry date which you are able to set or extend.

Previously your App ID and Secret Key were used to establish a session and logging in required passing in the Mojio username and password directly.

Now the App ID is used with OAuth2 to retrieve an authentication token. This means you, the developer, never have to deal directly with Mojio usernames or passwords! You simply have to retrieve and store an authentication token and you are good to go.

See the User Authentication with OAuth2 section below for more details.