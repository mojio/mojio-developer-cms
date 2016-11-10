# Authenticating a user #

### Logging In/Out (Swift)
```
self.authClient.login({
    // Callback is executed once the user is logged in
}]);

self.authClient.logout()
```

### Logging In/Out (Objective-C)
```
[self.authClient login:^{
    // Block is executed once the user is logged in
}];

[self.authClient logout];
```
