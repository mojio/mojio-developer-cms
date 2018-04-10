# Authentication#

Every Mojio API call must be properly authorized by a bearer token sent in the Authorization header.


## Obtaining a Token ##

Bearer tokens can be obtained via using either of the mechanisms described below.  Each mechanism is geared toward different types of applications. 

### Implicit Authorization ###

Use this method if you are developing a client-side application (ex: iOS, Android, or a Javascript web app).

##### Request #####

Direct the user through a web browser or web view to the authorize endpoint: https://identity.moj.io/connect/authorize? with the following parameters:

| Param | Description |
|---|---|
| response_type | Required. Must be set to **token** |
| client_id | Required.  Your application's ID. |
| redirect_uri | Required. The URI to send the user once authorization has completed. |
| scope | Optional. The possible scope of the request. |
| state | Optional (but recommended). Any client-side state that will be maintained through to the response. |

##### Response #####

The response will be returned via the redirect_uri with paramaters passed as a URI fragment (*#*).

| Param | Description |
|---|---|
| access_token | This is your access token! Yay! |
| token_type | The token type. This will be **bearer**. |
| expires_in | Number of seconds till the access token expires. |
| scope | The final scope of the access token. |
| state | Same value that was passed in through the request. |

On success, you'll be redirected to the uri you provided above:
(https://redirect_uri#access_token=ACCESS_TOKEN&token_type=Bearer&expires_in=86400&scope=full%20offline_access)

##### Example #####

REQUEST:

    Update example

RESPONSE:

    Update example
    

### Authorization Code ###

Use this method if you are developing a server-side web application (ex: PHP, ASP.NET, etc).

##### Initial Request #####

Direct the user to the authorize endpoint (https://identity.moj.io/connect/authorize?) with the following parameters:

| Param | Description |
|---|---|
| response_type | Required. Must be set to **code** |
| client_id | Required.  Your application ID. |
| redirect_uri | Required. The URI to send the user once authorization has completed. |
| scope | Optional. The possible scope of the request. |
| state | Optional (but recommended). Any client side state that will be maintained through to the response. |

##### Initial Response #####

The response will be returned via the redirect_uri with paramaters passed as a query parameter (*?*): [https://redirect_uri?code=CODE&scope=full%20offline_access](https://redirect_uri?code=CODE&scope=full%20offline_access)


##### Secondary Request #####

Next, your server must exchange the **code** for a full access token using a POST to the token endpoint (https://identity.moj.io/connect/token).  The following parameters must be application/x-www-form-urlencoded in the **BODY** of the request.

| Param | Description |
|---|---|
| grant_type | Required. Must be set to **authorization_code** |
| client_id | Required.  Your application's ID. |
| client_secret | Required.  Your application's secret key. |
| code | Required. The authorization **code** received from the authorization server. |
| redirect_uri | Required. Must match the redirect_uri sent in the previous request. |

##### Secondary Response #####

Upon success, you'll receive the token and the refresh token:

| Param | Description |
|---|---|
| access_token | This is your access token. Yay! |
| token_type | The token type. This will be **bearer**. |
| expires_in | Number of seconds till the access token expires. |
| scope | The final scope of the access token. |
| refresh_token | A long-lived token that can be used to generate an additional access_token in the future. |

##### Example #####

INITIAL REQUEST:

    Update example

INITIAL RESPONSE:

    Update

SECONDARY REQUEST:

    Update
    
SECONDARY RESPONSE:

    Update
    

# Known Issues #


## 404 eh! ##

This means you probably have the wrong URL in your request. Double-check the URLs as described above.


## error: redirect_uri_mismatch ##
error_description: The redirect URI in the request did not match a registered redirect URI.

In this case you will need to double-check your "redirect_uri", make sure you used the same URI you setup in your app using the developer center.

## "error": "access_denied" ##

{
"error": "access_denied"
"error_description": "Invalid client credentials."
}

In this case, your client id, or secret is probably incorrect. App ID is the same as the Client ID. It is the ID that was automatically created for you when you created your application.


## {"error":"unsupported_grant_type"} ##

In this case, check the "grant_type" parameter, It must be set to "password", "code", or "refresh_token" depending on the method of authentication you wish to perform.



