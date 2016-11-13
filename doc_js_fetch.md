### Fetching Data ###
get() method provides many sub methods to receive list of objects. Here is the list of calls for receiving data:
```
mojio_client.get().me() //Fetching Authorized user
mojio_client.get().users() //Fetching users
mojio_client.get().mojios() //Fetching mojios (devices)
mojio_client.get().vehicles() //Fetching vehicles
mojio_client.get().apps() //Fetching apps
mojio_client.get().groups() //Fetching groups
mojio_client.get().trips() //Fetching trips
mojio_client.get().geofences() //Fetching Geofences
```
### Getting a specific entry ###
If you want to retrieve a specific entity, for example a Mojio, user, trip or event, you can pass in the entity ID:
```
mojio_client.get().user(id) //Fetching specefic user data
mojio_client.get().mojio(id) //Fetching specefic mojio data
mojio_client.get().vehicle(id) //Fetching specefic vehicle data
mojio_client.get().app(id) //Fetching specefic app data
mojio_client.get().group(id) //Fetching specefic group data
mojio_client.get().trip(id) //Fetching specefic trip data
mojio_client.get().geofence(id) //Fetching specefic geofence data
```

Examples:
```
// Fetching list of Mojio devices
mojio_client.get().mojios().then(function(res,err){
        // if err is null then data will be inside res
}

// Fetching one specefic device data
mojioId='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' // Id of device you want to fetch
mojio_client.get().mojio(mojioId).then(function(res,err){
        // if err is null then data will be inside res
}
```
### Custom fetching data ###
When you are making call, you can specify these conditions:
- Top: The maximum number of records to return.
- Skip: The number of records to skip before it retrieves records in a collection.
- filter: Specifies an expression or function that must evaluate to true for a record to be returned in the collection.
- Select: Specifies a subset of properties to return.
- Orderby: Determines what values are used to order a collection of records.

There is a helper method for cutomization:
```
// Fetching list of Mojio devices
custom=mojio_client.query()
    .top(10)
    .skip(2)
    .filter("your filter")
    .select("list of fields")
    .orderby("something");

mojio_client.get().vehicles(custom).then(function(res,err){
        // if err is null then data will be inside res
}
```

### Advanced fetching data ###
In addition to all method for fetching data you can use getPath method to call any GET Api call to Mojio:
```
// getPath(url,data)
// Fetching list of Mojio devices
mojio_client.getPath('/v2/mojios').then(function(res,err){
        // if err is null then data will be inside res
}
```
Also it's handy for calling V1 api:
```
mojio_client.getPath('/v1/users/me').then(function(res,err){
        // if err is null then data will be inside res
}
```
### Updating and entity ###
If you want to update and save an entity, you need to first load the entity from the API, make your changes, and then save it back. Typically only the owner of an entity will be authorized to save changes and not all properties of an entity will be editable (for example, for an App, only the Name and Description properties can be changed).
```
    // This example reterive list of vehicles and then change the title of the first vehicle and save it.
    mojio_client.get().vehicles().then(function(res,err){
        v=res.Data[0]
        v.Name="new vehicle name"
        mojio_client.vehicle(v).put().then(function(res,err) {
            console.log("error");
            console.log(err);

            console.log("new put result");
            console.log(res);
        });
    });
```
### Deleting an entity ###
If you want to delete an entity from the Mojio API, a delete call must be made. Typically only the owner of an entity will be authorized to delete an entity, and not all entities can be deleted.

```
    // This example reterive list of trips and then selete the first trip.
    mojio_client.get().trips().then(function(res,err){

        mojio_client.vehicle(res.Data[0]).delete().then(function(res,err) {
            console.log("error");
            console.log(err);

            console.log("delete result");
            console.log(res);
        });
    });
```

### Retreiving child entities ###
For example, if you want to fetch the Trips associated with a Vehicle:
```
    mojio_client.get().vehicles().then(function(res,err){
        mojio_client.vehicle(res.Data[0]).trips().then(function(res,err) {
            console.log("error");
            console.log(err);

            console.log("result");
            console.log(res);
        });
    });
```