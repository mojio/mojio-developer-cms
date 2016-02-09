## Authentication ##

Many of the API calls require an authorized user to be associated with the SDK requests. After a user successfully logs in a Token object will be returned that contains a token id (GUID), which must be sent in all subsequent HTTP request headers in the field "MojioAPIToken".

Tokens have an expiry date which you are able to set or extend.

Your App ID (Which you can find on your "My Apps" page of [developer.moj.io](https://developer.moj.io)) is used with OAuth2 to retrieve the authentication token. So you, the developer, never have to deal directly with Mojio usernames or passwords! You simply have to retrieve and store an authentication token and you are good to make requests to the API. 


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

**IMPORTANT**: You must register your redirect\_uri value in your application's management area (Go to developer.moj.io, navigate to “My Account” -> “My Apps” -> "Manage", and fill in the redirect URIs field). The redirect URI that you've set in your app settings and the URI you are using in your source code must match exactly (i.e. exact case) and include the scheme, url, port, and query parameters. You can list more than one URI in your app settings by putting them on separate lines. If you do no include the redirect\_uri parameter in your path OAuth will automatically use the first one listed in your apps list of redirect URIs. 

Also note that the api authentication endpoint redirects to our OAuth server so make sure you application (especially if its a mobile application!) can handle redirects. 

On the the page that handles the redirect back from authentication, you must retrieve the authentication token. To do this in JavaScript use:

match = document.location.hash.match(/access_token=([0-9a-f-]{36})/)
token = !!match && match[1]

This token is your authentication token that is used in the header of all subsequent calls. Just include a header key 'MojioAPIToken' with the value of this token.

	MojioAPIToken=[TOKEN RETURNED FROM OAUTH2]
or 
	authorization = bearer [TOKEN RETURNED FROM OAUTH2]

Mojio provides a PHP, JavaScript, and C# OAuth implementation that you can use in your applications. See Authenticating a Mojio User for more info.

Otherwise, any standard third party OAuth2 libraries for browser or mobile should work to authenticate against the Mojio API.

Here's a list of third party clients that you can use: [http://oauth.net/code/](http://oauth.net/code/)