# Domain Models #

### Tagging ###

All resources now have a list of string associated with them called Tags.  Tags can be used to identify resources. To create a tag simply do a POST to v2/{resource}/{id}/tags/{tag}. Where resource is either User, Apps, Vehicles, Groups, Mojios, or Trips, id is the entity's id and tag is the string you would like to add. 

For example to tag a trip as being business related I could do

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

User, Apps, and Vehicles can all have images associated with them. When an image is uploaded links to src image, a normalized image and a thumbnail are created and added to the domain model. To view the images simply navigate to the links provided. 

Creating/Updating an image:

POST/PUT v2/{resource}/{id}/image

Where resource is either apps, vehicles, or users, id is the entity's id and image is a formData parameter

Deleting an image:

DELETE v2/{resource}/{id}/image

Images must have a minimum width and height of 400px, and a maximum width and height of 10000px to be uploaded. Images cannot exceed 5mb in size. 

### Storage ###

TODO...

