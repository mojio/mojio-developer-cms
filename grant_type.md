
# Chooase Your Grant Type #

## Which Grant Type to Use? ##

Before you register your app and obtain authentication credentials, you need to decide whether to use implicit or authorization code to generate your access token. 

Which is best for you?

### Implicit grant ###

If you have a “single page application” (e.g., an application running in a browser using a scripting language such as Javascript), then the implicit grant should be used. In this case, instead of getting an authorization code that needs to be exchanged for an access token, you would retrieve an access token directly. Although this is more efficient since it reduces the number of round trips required to get an access token, it is not secure because the access token is exposed on the client side. In other words, implicit grant does not return refresh tokens because the browser generally cannot keep them private. Mojio implicit grant tokens expire in 12 hours; after this, users have to log in again. 

### Authorization code grant ####

If you have a regular web app executing on a server, then the authorization code grant is the flow you should use to retrieve an authorization token and, optionally, a refresh token. This is considered the safest choice since the authorization token is passed directly to the web server hosting the application without going through the user's web browser and risking exposure. Mojio refresh tokens are good for a month; once expired, your developers can generate a new token without users needing to log in again.

## How to Generate a Grant Token ##

Here is the code snippet to use to generate a token:


### IMPLICIT ###

{
"Description": "string",
"Name": "string",
"AllowedGrantTypes": [
"implicit"
],
"RedirectUris": [
"string"
]
}

### AUTHORIZATION CODE ###
{
"Description": "string",
"Name": "string",
"AllowedGrantTypes": [
"authorization_code",
“refresh_token”
],
"RedirectUris": [
"string"
]
}

**NOTE: Your redirect URIs must use HTTPs**

## Next Steps ##

To generate the code yourself:

+ Click the API link above, from the sidebar, click **Apps**, then **POST** for **/v2/apps**.(or, if you’re logged in, go to https://docs.moj.io/#!/api/detail/REST/~2Fv2~2Fapps/post)
+ If sample code is not shown in the Value box under Parameters, click the far right icon. 
+ In the snippet, change the values as needed and click **Execute**. 

Once that is done, proceed to the [authentication instructions page](https://docs.moj.io/#!/document/view/doc_auth).







