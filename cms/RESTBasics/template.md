

The REST API can be used to create, read, update and delete resources. 

### Endpoints ###

The REST API endpoints are located at [https://api.moj.io/v2/]("https://api.moj.io/v2/"). To create a complete request, combine the endpoint with the appropriate HTTP headers and your JSON payload. You can try out the REST API at [https://api.moj.io/swagger](https://api.moj.io/swagger).

For more information on routing see our [Mojio API Endpoints page]("#/content/cms.Getting_Started.2-EndPoints").

### Authentication ###
The auth token header must be included in all calls to the REST API. 

	MojioAPIToken=[TOKEN RETURNED FROM OAUTH2]
or 

	Authorization = Bearer [TOKEN RETURNED FROM OAUTH2]

See the [Authorization section](#/content/cms.GettingStarted.4-Authorization) for more information on how to retrieve the Token.

### Next Steps ###

[Check out the Sharing and Access Section to find out more about Permissions >](#/content/cms.RESTBasics.Access)