
# Register Your App #

## Authentication ##
Some endpoints require an authorized user in order to make API calls. Many of the API calls require an authorized user to be associated with the SDK requests. After a user successfully logs in, a Token object will be returned that contains a token id, which must be sent in all subsequent HTTP request headers in the field "MojioAPIToken".

Tokens have an expiry date which you are able to set or extend.


# Set up Your App #
Before you can access the APIs, you have to register an app with Mojio. Registering an app gives you a _Client Id_ and a _Secret Key_ which is required for authentication.

You will need a Mojio account in order to use the Mojio APIs. To obtain a Mojio ID, please...

To set up an app:

* Browse to [https://docs.moj.io/#/myapp/](https://docs.moj.io/#/myapp/)
* If you are not logged in, you will be prompted to do so
* Give your new app a name and click "Create"
* Your app should now show up in the apps list
* Click on the key icon to get your app credentials
* Click on the pencil icon to set your redirect url (explained below)

# User Authentication #

See the [Authentication page](https://docs.moj.io/#!/document/view/doc_auth) for full instructions on authentication. 



