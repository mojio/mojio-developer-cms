You can play with the API in the [REST API](#/rest-list/REST/Apps) section.
​
### Querying ###

You can filter and sort any sets of results that are returned. These are included as query parameters on the URL

Example:

	https://api.moj.io/v2/vehicles?$filter=Name eq 'BatMobile'&$orderby=CreatedOn

** ***Make sure the query is URL encoded***

Filtering loosely follows the Odata protocol.
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
