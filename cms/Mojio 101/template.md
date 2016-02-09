# Mojio 101 #

## What is Mojio? ##
 
#### The Mojio platform consists of 3 Main entities, Mojios , Vehicles, Trips. ####

* A Mojio installs in a Vehicle
* A Vehicle generates trips.
* A Trip is made up of snapshots of the vehicle at different points in time.

#### There are also Users, Groups... ####

* When a User claims a Mojio they automatically become the owner of that Mojio.
* The User becomes owner of any vehicles the Mojio is plugged into.
* When a User starts a Vehicle it creates a Trip, a Trip is tied to a vehicle and owned by the User who owns the vehicle (which is also the owner of the Mojio). 
* A User can view information about the entities they are the owner of and have access to (More on this later) through Apps created by developers.
* Groups are a collection of Users

#### Sharing and Access: ####

* The Owner of a Vehicle can grant Groups of Users access to their entities
* Access rules are inherited with Mojios getting them from their owner, Vehicles from the Mojio, and Trips from Vehicles
* Access rules are applied on creation so when access is granted to a parent entity, only new children will get those new access rules
* That means if a Group is granted read all the information about a Vehicle the Group will also be able to read information on any new trips, but not see anything on trips that happened before access was granted.


#### Relationships:  ####

* A Mojio to Vehicle is typically 1 to 1.
* A Mojio will have zero-to-many Trips.
* A Vehicle will have zero-to-many Trips.
* A Trip will have 1 or more snap shots of a vehicle
* Mojio, Vehicle and Trip all have an Owner. 
* Groups will have zero-to-many Users
* Mojios, Vehicles and Users can have zero-to-many Groups that have access to their information


## How does it work? ##

#### How do you Connect a Mojio to a Vehicle? ####
It's easy. Mojio plugs into a vehicle's OnBoard Diagnostic (OBD) port, which is located under the dash usually within 24 inches of the steering wheel on the driver's side. Mojio uses machine-to-machine (M2M) cellular data exchange to send and receive data to and from a vehicle in real time. That data is "translated" and fed to an app on a smartphone, providing information about the vehicle and its status. 

#### How does Mojio Connect to the internet? ####

Mojio connects to the Internet through an always-on cellular connection inside the Mojio that is plugged into a vehicle. This allows for a seamless experience and is important because Mojio makes the car the device that is connected to the Internet directly (not a smartphone). Through this always-on connection, among other advantages, you know where a vehicle is at any moment.

#### Where will Mojio be available? ####
Mojio works in most cars built after 1995 and will connect to select cellular networks as we roll out across the world. Currently, we are available in the US and Canada. For more information on when Mojio will be available in your country, please contact us at info@moj.io


