You can play with the REST API at [https://api.moj.io/swagger](https://api.moj.io/swagger).

​
### Querying ###
Following Odata protocol for filtering
​
The comparisons that we support are:
​
        eq = equals
        gt = greater than
        gte = greater than or equal to
        lt = less than
        lte = less than or equal to
​
The format to follow for a filter is:
​
    Property Comparison Value
​
        Eg. IgnitionOn eq true
            Make eq 'Honda Civic 2015'
            FuelType eq Diesel
            LastContactTime gt '1/15/2016 6:53:00 PM'  
​
To access properties within a property you can use the ' . ' character.
For example take the JSON:
    
    "LastLocation": {
        "Lat": 0,
        "Lng": 0,
        "FromLockedGPS": true,
        "Dilution": 0,
        "IsValid": true
    },
To access the latitude you would write:

	Eg. LastLocation.Lat gte 0
        StartAddress.City eq Vancouver
​
To combine filters, use an operator. The following are operators that we support are:

	"and", "or"

	Eg. IgnitionOn eq true and Make eq 'Honda Civic 2015'
        IgnitionOn eq true or Make eq 'Honda Civic 2015'
​
To combine multiple filters in different orders you can use brackets

	Eg. (IgnitionOn eq true and Make eq 'Honda Civic 2015') or LastLocation.Lat gte 0 or (IgnitionOn eq true and Make eq 'Honda Civic 2015') or LastLocation.Lat gte 0
​
Common Mistakes:
​
The filter does not support the use of apostrophes, with or without an escape character, within quotations of a string.
This is not allowed

	Eg. Description eq 'Example User's Vehicle'
All quotations surrounding a string are single quotes ' instead of double quotes "
​
Ensure that all opening brackets and quotations have a matching closing bracket or quotation
​
### Tagging ###
​
All resources now have a list of string associated with them called Tags that are embedded into the resource model. Tags can be used to identify resources. To create a tag simply do a POST to v2/{resource}/{id}/tags/{tag}. Where resource is either User, Apps, Vehicles, Groups, Mojios, or Trips.  Id is the resource's id and tag is the string you would like to add. 
​
For example: This would tag a trip as being business related.
​
	POST v2/Trips/68ddbeb3-66b7-4a6e-8d26-3127c6843f84/tags/business
​
Now when I do a GET for that trip it will have a tags attribute:
​
	"Tags": [
	        "business"
	      ],
​
Deleting tags is very similar to creating them. 
​
	DELETE v2/Trips/68ddbeb3-66b7-4a6e-8d26-3127c6843f84/tags/business
​
This call would result in the following:
​
	"Tags": [
	      ],
​
### Images ###
​
User, Apps, and Vehicles can all have images associated with them. When an image is uploaded links to the source, a normalized image and a thumbnail are created and added to the resource model. To view the images simply navigate to the links provided.
​
Creating/Updating an image:
​
	POST/PUT v2/{resource}/{id}/image
​
Where resource is either Apps, Vehicles, or Users, and Id is the Id of the resource and image is a formData parameter.
​
Images must have a minimum width and height of 400px, and a maximum width and height of 10000px to be uploaded. Images cannot exceed 5mb in size. 
​
Deleting an image:
​
	DELETE v2/{resource}/{id}/image
​
