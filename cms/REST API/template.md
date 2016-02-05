# REST API#

You can play with the REST API at [https://api.moj.io/swagger](https://api.moj.io/swagger).

### Authentication ###
The MojioAPIToken header must be included in all calls to the REST API. See the Authorization SDK section for more information on how to retrieve the Token.

### Querying ###
**TODO**

### Creating Entities ###

To create new domain objects the POST calls can be used. You cannot create all types of entities. For example you can create an app but not a user (The OAuth Server handles creating users). To see the allowable calls check out https://api.moj.io/swagger for more details. 

### Updating Entities ###

Most resources are editable, but only certain fields are allowed to be changed. For example currently only Name, License Plate, VIN, and Override Odometer are editable, but fields like Speed that are read directly from the vehicle are not editable. To see a complete list of the allowable edits check out the Models of the PUT calls on https://api.moj.io/swagger or check out the Domain Models

### Deleting Entities ###

Most entities can be deleted...

