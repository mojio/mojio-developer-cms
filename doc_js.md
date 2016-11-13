# JavaScript SDK #

In order to make use of the code samples below you will first need to have a new app project set up. To set up a new app project go to the Create New App page. Once you have created a new application, you will need the AppID in order to initiate any API calls through our SDK.

### Installing the SDK ###
First you will want to download SDK libraries. You can do it manually or by NPM or Bower. There is no package name for NPM or Bower yet but you can install it by GIT endpoint:
```
npm install https://github.com/mojio/MojioClientLite --save

or

bower install https://github.com/mojio/MojioClientLite.git --save
```

### Initializing the SDK (Client Side) ###

Once you have included the SDK, connecting to our API is as simple as:
```
<script src="MojioClientLite.js"></script>
<script>
    var config = {
        application: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' // your application ID
    };
    mojio_client = new MojioClientLite(config);
</script>
```
"application" is the only mandatory option in config. But if you want more control you can modify the other options:
```
    var config = {
      application: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' // your application ID
      environment: '' // staging, develope, ...
      accountsURL: 'accounts.moj.io'
      apiURL: 'api.moj.io'
      pushURL: 'push.moj.io'
      redirect_uri:"your application redirect url", //it will be current url if not specify
      scope:'full'
      acceptLanguage:'en'
    }
```

### Initializing the SDK  (Server Side) ###

First you will want to download SDK libraries. Once you have downloaded and included the SDK, connecting to our API is as simple as:
```
var MojioClientLite= require("mojio-client-lite");

var config = {
    application: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    secret:'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
};

var mojio_client = new MojioClientLite(config);
```

"application" and "secret" are the only mandatory option in config. But if you want more control you can modify the other options:
```
    var config = {
      application: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' // your application ID
      secret:  'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' // your application secret
      environment: '' // staging, develope, ...
      accountsURL: 'accounts.moj.io'
      apiURL: 'api.moj.io'
      pushURL: 'push.moj.io'
      scope:'full'
      acceptLanguage:'en'
    }
```
