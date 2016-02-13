
### Creating an Application ###

To start using the API you are going to need to sign up for a Mojio account and create your very own Mojio application!

Browse to our [swagger documentation](https://api.moj.io/swagger).

1. Navigate to the [POST v2/apps call](https://api.moj.io/swagger/ui/index#!/Apps/CRUD_PostApp).
1. Click the on/off switch and login or create a Mojio account if you haven't already.
1. In the request box you can add a name, description and a list of redirect URIs, which are used in OAuth Authorization.
2. Click "Try it out!" when you have the request filled in to create your app.
1. After you've created the app copy you the Id. You'll need this for OAuth authorization as well!
2. You can edit you app's name, description and redirect URI's using PUT v2/apps/{id} or view it using the GET v2/apps and GET v2/apps/{id} calls.


### Next Steps ###

[For more information on OAuth check out our Authorization documentation >](#/content/cms.GettingStarted.4-Authorization).

