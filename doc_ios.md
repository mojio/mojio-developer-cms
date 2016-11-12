
# Installing the SDK from Cocoapods #

Add MojioSDK as a pod to your Podfile
```
pod ‘MojioSDK', :git => 'https://github.com/mojio/mojio-ios-sdk', :branch => ‘master'
```
Install or update your Pods
```
pod install or pod update
```

## Initializing Auth & Rest Clients (Swift)
```
import MojioSDK

self.authClient = MojioSDK.AuthClient.init(clientId: <CLIENT_ID>, clientSecretKey:  <CLIENT_SECRET>, clientRedirectURI: <CLIENT_REDIRECT_URI>)

self.restClient : RestClient = RestClient.init(clientEnvironment: ClientEnvironment.SharedInstance)
```

## Initializing Auth & Rest Clients (Objective-C)
```
import "MojioSDK-Swift.h"

self.authClient = [[AuthClient alloc] initWithClientId:<CLIENT_ID> clientSecretKey:<CLIENT_SECRET> clientRedirectURI:<CLIENT_REDIRECT_URI>];

self.restClient = [[RestClient alloc] initWithClientEnvironment:[ClientEnvironment SharedInstance]];1
```