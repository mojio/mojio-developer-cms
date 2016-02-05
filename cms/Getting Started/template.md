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

    https://api.moj.io/swagger/

And you can try out the Push API here: 

    https://push.moj.io/swagger/

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


### Getting Started (Create your first application) ###

To start using the API you are going to need to sign up for a Mojio account and create your very own Mojio application!

Browse to [https://developer.moj.io/account/signin](https://developer.moj.io/account/signin) and sign up for new Mojio account if you haven't already.

    1. After you've signed in navigate to “My Account” -> “My Apps” and select “Create New App”

    2. Give your new App a name and a description, and click "Save App".

    3. You will be taken to your Apps page. Click the "plus" symbol to show the app details.

    4. Copy your App ID.

    5. From here you can click on “Manage” to edit your application, including add a redirect url which is used in OAuth authentication (explained below).


### Authentication ###

Many of the API calls require an authorized user to be associated with the SDK requests. After a user successfully logs in a Token object will be returned that contains a token id (GUID), which must be sent in all subsequent HTTP request headers in the field "MojioAPIToken".

Tokens have an expiry date which you are able to set or extend.

Your App ID (Which you can find on your "My Apps" page of developer.moj.io) is used with OAuth2 to retrieve the authentication token. So you, the developer, never have to deal directly with Mojio usernames or passwords! You simply have to retrieve and store an authentication token and you are good to make requests to the API. 


#### User Authentication with OAuth2 ####

You will need to use OAuth2 to authenticate users. For mobile and website applications, this means redirecting to the Mojio authentication server at https://api.moj.io/OAuth2/authorize with three query parameters:

    response_type=token
    client_id=[your app id]
    redirect_uri=[your redirect]

the response_type will always be token.

The client_id parameter's value is the App ID of your application.

The redirect_uri is a url where the authentication server will return with a token once the user has logged in.

	PRODUCTION AUTHENTICATION SERVER REDIRECT 
	  https://api.moj.io/OAuth2/authorize?response_type=token&client_id=[YOUR_APP_ID]&redirect_uri=[YOUR_REDIRECT_URI]

IMPORTANT: You must register your redirect\_uri value in your application's management area (Go to developer.moj.io, navigate to “My Account” -> “My Apps” -> "Manage", and fill in the redirect URIs field). The redirect URI that you've set in your app settings and the URI you are using in your source code must match exactly (i.e. exact case) and include the scheme, url, port, and query parameters. You can list more than one URI in your app settings by putting them on separate lines. If you do no include the redirect\_uri parameter in your path OAuth will automatically use the first one listed in your apps list of redirect URIs. 

Also note that the api authentication endpoint redirects to our OAuth server so make sure you application (especially if its a mobile application!) can handle redirects. 

On the the page that handles the redirect back from authentication, you must retrieve the authentication token. To do this in JavaScript use:

match = document.location.hash.match(/access_token=([0-9a-f-]{36})/)
token = !!match && match[1]

This token is your authentication token that is used in the header of all subsequent calls. Just include a header key 'MojioAPIToken' with the value of this token.

MojioAPIToken=[TOKEN RETURNED FROM OAUTH2]

Mojio provides a PHP, JavaScript, and C# OAuth implementation that you can use in your applications. See Authenticating a Mojio User for more info.

Otherwise, any standard third party OAuth2 libraries for browser or mobile should work to authenticate against the Mojio API.

Here's a list of third party clients that you can use: [http://oauth.net/code/](http://oauth.net/code/)