
# Authentication #
Some endpoints require an authorized user in order to make API calls. 
Many of the API calls require an authorized user to be associated with the SDK requests. After a user successfully logs in a Token object will be returned that contains a token id (GUID), which must be sent in all subsequent HTTP request headers in the field "MojioAPIToken".

Before tokens are either for the Sandbox or Production environment, but the Sandbox environment has been deprecated so now there is just one environment.

Tokens have an expiry date which you are able to set or extend.

Previously your App ID and Secret Key were used to establish a session and logging in required passing in the Mojio username and password directly.

Now the App ID is used with OAuth2 to retrieve an authentication token. This means you, the developer, never have to deal directly with Mojio usernames or passwords! You simply have to retrieve and store an authentication token and you are good to go.

See the User Authentication with OAuth2 section below for more details.

# Setting up your App #
Before you can access the API, you have to register an App with Mojio. Registering an App give you a _Client Id_ and a _Secret Key_ which is require for authentication using OAuth 2.0.

You will need a Mojio account in order to use the Mojio APIs

In order to set up an App:

* Browse to https://developer.moj.io/myapp
* If you are not logged in, you will be prompted to log in
* Give your new App a name and click "Create"
* Your app should now show up in the apps list
* Click on the key icon to get your app credentials
* Click on the pencil icon to set your redirect url (explained below)

# User Authentication with OAuth 2.0 #

You will need to use OAuth2 to authenticate users. For mobile and website applications, this means redirecting to the Mojio authentication server at https://api.moj.io/OAuth2/authorize with three query parameters:

* response_type=token
* client_id=[your app id]
* redirect_uri=[your redirect]

The client_id parameter's value is the App ID of your application.

The redirect_uri is a url where the authentication server will return with a token once the user has logged in.

*IMPORTANT*: You must register your redirect_uri value in your application's management area (MyApps -> Pencil, the redirect URIs field). The redirect URI that you have set in your app settings and the URI in your source code must match exactly (i.e. exact case) and include the scheme, url, port, and query parameters. 

You may list more than one URI in your app settings by putting them on separate lines.

On the the page that handles the redirect back from authentication, you must retrieve the authentication token. To do this in JavaScript use:

```
match = document.location.hash.match(/access_token=([0-9a-f-]{36})/)
token = !!match && match[1]
```
This token is your authentication token that is used in the header of all subsequent calls. Just include a header key 'MojioAPIToken' with the value of this token.

```
MojioAPIToken=[TOKEN RETURNED FROM OAUTH2]
```

Mojio provides a PHP, JavaScript, and C# OAuth implementation that you can use in your applications. See Authenticating a Mojio User for more info.

Otherwise, any standard third party OAuth2 libraries for browser or mobile should work to authenticate against the Mojio API.

Here's a list of third party clients that you can use: http://oauth.net/code/