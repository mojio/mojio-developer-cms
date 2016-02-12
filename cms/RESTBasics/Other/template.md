
You can play with the REST API at [https://api.moj.io/swagger](https://api.moj.io/swagger).

### Tagging ###

All resources now have a list of string associated with them called Tags that are embedded into the resource model. Tags can be used to identify resources. To create a tag simply do a POST to v2/{resource}/{id}/tags/{tag}. Where resource is either User, Apps, Vehicles, Groups, Mojios, or Trips, id is the resource's id and tag is the string you would like to add. 

For example: This would tag a trip as being business related.

	POST v2/Trips/68ddbeb3-66b7-4a6e-8d26-3127c6843f84/tags/business

Now when I do a GET for that trip it will have a tags attribute:

	"Tags": [
	        "business"
	      ],

Deleting tags is very similar to creating them. 

	DELETE v2/Trips/68ddbeb3-66b7-4a6e-8d26-3127c6843f84/tags/business

This call would result in the following:

	"Tags": [
	      ],

### Images ###

User, Apps, and Vehicles can all have images associated with them. When an image is uploaded links to the source, a normalized image and a thumbnail are created and added to the resource model. To view the images simply navigate to the links provided.

Creating/Updating an image:

	POST/PUT v2/{resource}/{id}/image

Where resource is either Apps, Vehicles, or Users, id is the resource's id and image is a formData parameter
Images must have a minimum width and height of 400px, and a maximum width and height of 10000px to be uploaded. Images cannot exceed 5mb in size. 

Deleting an image:

	DELETE v2/{resource}/{id}/image




