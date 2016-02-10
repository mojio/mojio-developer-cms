# Conditions #

There are 4 types of conditions that can limit the behavior of an Observer.

**PropertyChanged**: This condition limits the Observer to only broadcast when the specified property changes.

For Example:
	
	"PropertyChanged": "MilStatus",

** This will only Broadcast when the MilStatus changes.

**Threshold**: The threshold condition limits the Observer to only broadcast when the specified property is above, below, or between the given Min and Max.
	
	Property: (Required) The property to check for change. For example Speed will be based off of Speed.BaseValue.
	Position: (Required) Can be Above, Below, Between
		Above: Checks if the current value is greater than the Max value, if Max is not provided will check the Min
		Below: Checks if the current value is less than the Min value, if Min is not provided will check the Max
		Between: Checks if the current value is less between the Max and the Min value
	Max: The maximum value
	Min: The minimum value

The units for Max and Min are those of the BaseUnits,

For Example:

	"Threshold": {
	    "Property": "Speed.BaseValue",
	    "Max": 100,
	    "Min": 50,
	    "Position": "Above"
	  },

** This will only Broadcast when the Speed is above 100 km/h.



**Debounce**: The debounce condition limits an observer to only broadcast when a certain number of data points have already been received and/or the condition has been maintained for a certain amount of time.


    TimeProperty:(Optional) The property to base the time off of. If nothing is specified this will default to the current UTC time. 
    MinDataPoints:(Optional) The minimum number of times the entity must satisfy all other conditions before the observer will broadcast
    Delay: (Optional) the amount of time that the condition must be maintained for before it can be broadcast. Delay is represented in JSON as a string of the format "0.00:00:00.0000" where "0.01:35:11.0000" Would be 1 hour 35 minutes and 11 seconds.

** Note at least one of MinDataPoints or Delay is required.

For Example:

	"Debounce": {
	    "DataPoints": 10,
	    "Delay": "0.01:00:00.0000"
	  },

** This will only Broadcast when the conditions have been met 10 times AND it has been over an hour since the first time the condition passed.

**Throttle**: The Throttle condition limits the observer to only broadcast if there has been a certain amount of time since the last successful broadcast of the condition. All changes during the window will be ignored.

You could limit the observer to only broadcast once an hour, or once a day even if the conditions have been satisfied multiple times within that time period.

	TimeProperty: (Optional) The property to base the time off of. If nothing is specified this will default to the current UTC time. 
	Window: (Required) The amount of time that must have passed before the Observer will broadcast again. Window is represented in JSON as a string of the format "0.00:00:00.0000" where "0.01:35:11.0000" Would be 1 hour 35 minutes and 11 seconds.

For Example: 

	"Throttle": {
	    "TimeProperty": "LastContactTime",
	    "Window": "0.08:00:00.0000"
	  }

** This will only Broadcast once there is at least an 8 hour difference between the LastContactTime of the previous broadcast. 
