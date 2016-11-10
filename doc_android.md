# Android SDK #

This describes the Java SDK for integrating with the Mojio platform. This SDK may be used for server side development or for Android.

## Download ##
```gradle
compile 'io.moj.java:mojio-sdk-model:0.0.1'
compile 'io.moj.java:mojio-sdk-rest:0.0.1'
```

## Structure ##
The SDK is broken into modules - you may choose to use some or all of them for your application.
See each module's subdirectory for more detailed instructions.

As much as possible we have tried to reduce the number of dependencies our SDK brings into your app.
Some models, unfortunately, require distinct serialization behaviour (in particular enums) and we
have opted to annotate these classes using [GSON](https://github.com/google/gson).

The SDK is available on github here: [https://github.com/mojio/mojio-java-sdk](https://github.com/mojio/mojio-java-sdk)

The SDK consists of the following sub modules

[mojio-sdk-model](https://github.com/mojio/mojio-java-sdk/tree/develop/mojio-sdk-model)
  This contains the model classes for use with the Mojio REST API. These objects are annotated for serialization with GSON. The Model SDK can be plugged into your existing REST-client framework.

[mojio-sdk-rest](https://github.com/mojio/mojio-java-sdk/tree/develop/mojio-sdk-rest)
  This is the client for getting up and running making calls to the Mojio API quickly. The client is highly-configurable
  and handles basic authentication.

[mojio-sdk-test](https://github.com/mojio/mojio-java-sdk/tree/develop/mojio-sdk-test)
  This module contains common functionality used for each module's tests. You will probably only need this module if you are forking or building from scratch.
