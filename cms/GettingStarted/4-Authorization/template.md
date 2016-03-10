## API requests ##

Every Mojio API call must be properly authorized by a bearer token sent in the Authorization header.

    Authorization: bearer ********-****-****-****-************

## Obtaining a bearer token ##

Bearer tokens can be obtained via OAuth2 using one of 3 mechanisms.  Each mechanism is geared towards different types of applications, and designed to maintain 

### Implicit Authorization ###

Use this method if you are developing a client side application (ex: iOS, Android, or a Javascript web app).

##### Request #####

Direct the user through a web browser or web view to the authorize endpoint: https://accounts.moj.io/oauth2/authorize with the following parameters:

| Param | Description |
|---|---|
| response_type | Required. Must be set to **token** |
| client_id | Required.  Your applications ID. |
| redirect_uri | Required. The URI to send the user once authorization has completed. |
| scope | Optional. The possible scope of the request. |
| state | Optional (recommended). Any client side state that will be maintained through to the response. |

##### Response #####

The response will be returned via the redirect_uri with paramaters passed as a URI fragment (*#*).

| Param | Description |
|---|---|
| access_token | This is your access token! Yay. |
| token_type | The token type. This will be **bearer**. |
| expires_in | Number of seconds till the access token expires. |
| scope | The final scope of the access token. |
| state | Same value that was passed in through the request. |

##### Example #####

REQUEST:

    https://accounts.moj.io/oauth2/authorize?response_type=token&client_id=9852c940-19bb-47d0-9a7b-b9ec89776d14&redirect_uri=https://my.moj.io/&scope=full

RESPONSE:

    https://my.moj.io/#access_token=********-****-****-****-************&token_type=bearer&expires_in=43200
    

### Authorization Code ###

Use this method if you are developing a server side web application (ex: PHP, ASP.NET, etc).

##### Initial Request #####

Direct the user to the authorize endpoint (https://accounts.moj.io/oauth2/authorize) with the following parameters:

| Param | Description |
|---|---|
| response_type | Required. Must be set to **code** |
| client_id | Required.  Your applications ID. |
| redirect_uri | Required. The URI to send the user once authorization has completed. |
| scope | Optional. The possible scope of the request. |
| state | Optional (recommended). Any client side state that will be maintained through to the response. |

##### Initial Response #####

The response will be returned via the redirect_uri with paramaters passed as a query parameter (*?*).

| Param | Description |
|---|---|
| code | This is your access token! Yay. |
| state | Same value that was passed in through the request. |

##### Secondary Request #####

Next, your server must exchange the **code** for a full access token using a POST to the token endpoint (https://accounts.moj.io/oauth2/token).  The following parameters must be application/x-www-form-urlencoded in the **BODY** of the request.

| Param | Description |
|---|---|
| grant_type | Required. Must be set to **authorization_code** |
| client_id | Required. Must be set to **code** |
| client_secret | Required.  Your applications ID. |
| code | Required. The authorization **code** received from the authorization server. |
| redirect_uri | Required. Must match the redirect_uri sent in the previous request. |

##### Secondary Response #####

The response will be a JSON string containing the following properties.

| Param | Description |
|---|---|
| access_token | This is your access token! Yay. |
| token_type | The token type. This will be **bearer**. |
| expires_in | Number of seconds till the access token expires. |
| scope | The final scope of the access token. |
| refresh_token | A long lived token that can be used to generate an additional access_token in the future. |

##### Example #####

INITIAL REQUEST:

    https://accounts.moj.io/oauth2/authorize?response_type=code&client_id=9852c940-19bb-47d0-9a7b-b9ec89776d14&redirect_uri=https://my.moj.io/&scope=full

INITIAL RESPONSE:

    https://my.moj.io/?code=********-****-****-****-************

SECONDARY REQUEST:

    POST https://accounts.moj.io/oauth2/token
    grant_type=authorization_code&client_id=9852c940-19bb-47d0-9a7b-b9ec89776d14&client_secret=********-****-****-****-************&code=********-****-****-****-************&redirect_uri=https://my.moj.io/&scope=full
    
SECONDARY RESPONSE:

    { "access_token"  : "********-****-****-****-************",
      "token_type"    : "bearer",
      "expires_in"    : "43200",
      "refresh_token" : "********-****-****-****-************",
    }
    

### Resource Owner ###

Use this method only if you cannot use one of the two previous methods, and should only be done by a server in a protected environment.

##### Request #####

Your server will need to obtain the user's credentials then send a POST to the token endpoint (https://accounts.moj.io/oauth2/token).  The following parameters must be application/x-www-form-urlencoded in the **BODY** of the request.

| Param | Description |
|---|---|
| grant_type | Required. Must be set to **password** |
| client_id | Required. Must be set to **code** |
| client_secret | Required.  Your applications ID. |
| username | Required. The user's username or email address. |
| password | Required. The user's password. |

##### Response #####

The response will be a JSON string containing the following properties.

| Param | Description |
|---|---|
| access_token | This is your access token! Yay. |
| token_type | The token type. This will be **bearer**. |
| expires_in | Number of seconds till the access token expires. |
| scope | The final scope of the access token. |
| refresh_token | A long lived token that can be used to generate an additional access_token in the future. |

##### Example #####

REQUEST:

    POST https://accounts.moj.io/oauth2/token
    grant_type=password&client_id=9852c940-19bb-47d0-9a7b-b9ec89776d14&client_secret=********-****-****-****-************&username=***&password=***
    
RESPONSE:

    { "access_token"  : "********-****-****-****-************",
      "token_type"    : "bearer",
      "expires_in"    : "43200",
      "refresh_token" : "********-****-****-****-************",
    }
