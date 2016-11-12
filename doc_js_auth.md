### Authenticating a Mojio User (Client Side) ###
Many of our API calls require an authorized user to be associated with the SDK requests. In order to authenticate a user, you must redirect to the Mojio authentication server.

```
    if (mojio_client.token())
    {
        alert("Authorization Successful.");
        // Here you can call API calls for authorized user
    }
    else
    {
        // No authorized user, redirect to Mojio authentication server.
        mojio_client.authorize();
    }
```

### Logout (Client Side) ###
It's similar to authorize(), the only difference is it force the current user logout and then it will show login form again.

```
        mojio_client.logout();
```

### Authenticating a Mojio User (Server Side) ###
Many of our API calls require an authorized user to be associated with the SDK requests. In order to authenticate a user.

```
    mojio_client.authorize('username or email','password').then(function(res,err){

        if(typeof(err)!="undefined")
        {
            console.log("login error");
            return;
        }

        // login successful
        // write your logic here
    })
```

### Using the Refresh Token ###
Token will expire after 12 hours. To receive new token:
```
mojio_client.refreshToken();
```

### Storing tokens ###
Token will store in memory by default, but it's easy to configure to store in other storage (like sessionStorage or localStorage). To do so you need to change it in config:
```
var config = {
    ...
    dataStorage:sessionStorage, // sessionStorage or localStorage
    ...
};

var mojio_client = new MojioClientLite(config);
```
