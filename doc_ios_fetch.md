# Fetching Data #

## In Swift
```
self.restClient.get().vehicles().query(top: <TOP_OFFSET>, skip: <SKIP_COUNT>, filter: <FILTER>, select: <SELECT>, orderby: <ORDER-BY>).run(
    {
        response in
        // Executed when the data is successfully fetched
    }, failure:
    {
        error in
        // Executed if there was an error in trying to retrieve data
    }
)
```
## In Objective-C
```
[[restClient get] vehicles:nil] query:<TOP_OFFSET> skip:<SKIP_COUNT> filter:<FILTER> select:<SELECT> orderby:<ORDER-BY>] run:^(id response) {
    // Executed when the data is successfully fetched
} failure:^(NSString * error) {
    // Executed if there was an error in trying to retrieve data
}];
```

## Getting a specific entity

### In Swift
```
self.restClient.get().vehicles(<VEHICLE_ID>).run(
    {
        response in
        // Executed when the data is successfully fetched
    }, failure:
    {
        error in
        // Executed if there was an error in trying to retrieve data
    }
)
```

### In Objective-C
```
[[restClient get] vehicles:<VEHICLE_ID>] run:^(id response) {
    // Executed when the data is successfully fetched
} failure:^(NSString * error) {
    // Executed if there was an error in trying to retrieve data
}];
```

## Saving an existing entity

### In Swift
```
self.restClient.put().vehicles(<VEHICLE_ID>).run(vehicle.json(), completion:
    {
        response in
        // Executed when the data is successfully fetched
    }, failure:
    {
        error in
        // Executed if there was an error in trying to retrieve data
    }
)
```

### In Objective-C
```
[[restClient put] vehicles:<VEHICLE_ID>] run:vehicle.json(), completion:^(id response) {
    // Executed when the data is successfully fetched
} failure:^(NSString * error) {
    // Executed if there was an error in trying to retrieve data
}];
```

## Deleting an existing entity

### In Swift
```
self.restClient.delete().vehicles(<VEHICLE_ID>).run(
    {
        response in
        // Executed when the data is successfully fetched
    }, failure:
    {
        error in
        // Executed if there was an error in trying to retrieve data
    }
)
```

### In Objective-C
```
[[restClient delete] vehicles:<VEHICLE_ID>] run:^(id response) {
    // Executed when the data is successfully fetched
} failure:^(NSString * error) {
    // Executed if there was an error in trying to retrieve data
}];
```