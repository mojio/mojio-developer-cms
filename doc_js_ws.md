### WebSocket (PUSH) (Client Side) ###
Mojio allows developers to receive data on Entity changes (Mojios,Vehicle) so instead of pulling data server can push changes to client.
```
websocket=mojio_client.push(url)

websocket=mojio_client.push().mojios()
//observing all mojio devices (you can call mojio_client.push('/v2/mojios') instead)

websocket=mojio_client.push().mojio(id)
//observing one mojio device by passing device id (you can call mojio_client.push('/v2/mojios/' + id) instead)

websocket=mojio_client.push().vehicles()
//observing all vehicles (you can call mojio_client.push('/v2/vehicles') instead)

websocket=mojio_client.push().vehicles(id)
//observing one vehicle by passing vehicle id (you can call mojio_client.push('/v2/vehicles/' + id) instead)


websocket.onopen = function(){
    // do something onopen event
}

websocket.onclose = function(){
    // do something onclose event
}

websocket.onerror = function(error){
    // do something onerror event
    // console.log(error)
}

websocket.onmessage = function(e){
    // do something onmessage event
    // console.log(e)
}

//closing the connection
websocket.close()


```

### WebSocket (PUSH) (Server Side) ###
Mojio allows developers to receive data on Entity changes (Mojios,Vehicle) so instead of pulling data server can push changes to client.
```
websocket=mojio_client.push(url)

websocket=mojio_client.push().mojios()
//observing all mojio devices (you can call mojio_client.push('/v2/mojios') instead)

websocket=mojio_client.push().mojio(id)
//observing one mojio device by passing device id (you can call mojio_client.push('/v2/mojios/' + id) instead)

websocket=mojio_client.push().vehicles()
//observing all vehicles (you can call mojio_client.push('/v2/vehicles') instead)

websocket=mojio_client.push().vehicles(id)
//observing one vehicle by passing vehicle id (you can call mojio_client.push('/v2/vehicles/' + id) instead)

websocket.on('open', function open() {
    // do something onopen event
});

websocket.on('message', function(data, flags) {
    // do something onmessage event
    // console.log(data)
});

websocket.on('close', function close() {
   // do something onclose event
});

websocket.close()


```