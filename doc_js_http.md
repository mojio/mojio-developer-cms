### Creating a HTTP POST Observer ###

Mojio allows developer receive data on Entity changes by HTTP POST. So in addition to listening to HTTP post (for example by express) you need to define observer:
```
data={
    "Key" : "square",
    "Conditions": "Location.Lat gt 91.987 and Location.Lat lt 92.83738 and Location.Lng lt -120.28378 and Location.Lng gt -121.23873",
    "Timing": "Leading",
    "Transports" : [
        {
            "Type" : "HttpPost",
            "Address" : "https://b940657a.ngrok.io/observer_callback" //change it to your listening url
        }
    ]
}

mojio_client.post("https://push.moj.io/v2/vehicle",data).then(function(res,err){
	// if err is null then observer created successfully.
}
```