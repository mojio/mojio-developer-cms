## Observer Templates ##

More often than not, you will want to use the exact same observer rules for all customers.  Insteading of your application needing to create and manage the observers for every customer, you can use an observer template to define an observer for all customers at once.

## Creating a Template ##

Creating a template is very similar to creating an observer.  You just need to be logged in as an administrator of your application and then PUT to `https://push.moj.io/v2/configs/{my-app-id}/{resource}/{key}/`  

You can also add an optional `?updateAll=true` parameter if you wish to retroactively update all existing customer's observers based on this template.

#### Example Setup ####

In swagger, setup an application template for an ignition-on observer.

```
PUT https://push.moj.io/v2/configs/{my-app-id}/vehicles/ignition-on/
{
   "Conditions": "IgnitionState.Value eq true",
   "Timing": "Enter"
}
```

#### Example Application ####

Now that the template has been created, all the application will need to do, is add it's transport to the observer.

```
PUT https://push.moj.io/v2/vehicles/ignition-on/transports
{
    "Type": "Android",
    "DeviceRegistrationId": "this-devices-id"   
}
```
