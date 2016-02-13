# Mojio 101 

[Purpose: Basic information the entities, the relationships and how it actually works]

## How does it work? ##

#### How do you Connect a Mojio to a Vehicle? ####
It's easy. Mojio plugs into a vehicle's OnBoard Diagnostic (OBD) port, which is usually located under the dash usually within 24 inches of the steering wheel on the driver's side. Mojio uses machine-to-machine (M2M) cellular data exchange to send and receive data to and from a vehicle in real time. That data is "translated" and can be accessed via our REST API through apps on a smartphone or the web, providing information about the vehicle and its status. 

#### How does Mojio Connect to the internet? ####

Mojio connects to the Internet through an always-on cellular connection inside the Mojio that is plugged into a vehicle. This allows for a seamless experience and is important because Mojio makes the car the device that is connected to the Internet directly (not a smartphone). Through this always-on connection, among other advantages, you know where a vehicle is at any moment.

#### Where will Mojio be available? ####
Mojio works in most cars built after 1995 and will connect to select cellular networks as we roll out across the world. Currently, we are available in the US and Canada. For more information on when Mojio will be available in your country, please contact us at info@moj.io.


## What is Mojio? ##
 
#### The Mojio platform consists of 3 Main entities, Mojios , Vehicles, Trips. ####

* A Mojio installs into a Vehicle.
* When A Mojio is plugged in it creates a Vehicle.
* A Vehicle generates Trips.
* A Trip is made up of snapshots of a Vehicle at different points in time.
* A Trip starts when a Vehicle's ignition turns on and ends when the ignition turns off 

#### There are also Users, Groups... ####

* When a User claims a Mojio they automatically become the owner of that Mojio.
* The User becomes owner of any Vehicles the Mojio is plugged into.
* When a User starts a Vehicle a Trip is created.
* A Trip is tied to a Vehicle and is owned by the User, who owns the Vehicle (which also happens to be the owner of the Mojio). 
* A User can view information about the entities that they are the owner of and have access to through Apps created by developers.
* Groups are a collection of Users.

#### Sharing and Access: ####

* The Owner of an entity can grant Groups of Users access to their entities.
* Access rules are inherited 
	* Mojios inherit from their owner
	* Vehicles inherit from the Mojio
	* Trips inherit from the Vehicle
* Access rules are applied on creation so when access is granted to a parent entity, only new children will get those new access rules
* If a Group is granted read access to all the information about a Vehicle the Group will also be able to read information about new Trips, but not see anything about Trips that happened before access was granted.
* See the Permissions and [Access section](#/content/cms.RESTBasics.Access) for more information.

#### Relationships:  ####

* A Mojio to Vehicle is typically 1 to 1.
* A Mojio can be moved from one Vehicle to another, this will create a brand new Vehicle. 
* A Mojio will have zero-to-many Trips.
* A Vehicle will have zero-to-many Trips.
* A Trip will be made up of 1 or more snapshots of a Vehicle.
* Mojio, Vehicle and Trip all have an Owner. 
* Groups will have zero-to-many Users.
* Mojios, Vehicles and Users can have zero-to-many Groups which have access to their information.


## Next Steps ##

[Connecting to the Mojio Platform >](#/content/cms.GettingStarted.2-EndPoints)