// The parameter weekday is true if it is a weekday, and the parameter vacation // is true if we are on vacation. We sleep in if it is not a weekday or we're on // vacation. Return true if we sleep in.

var weekday = true;
var vacation = true;
var sleepIn = function(weekday, vacation){
//  vacation = true;
  if (vacation == true){
    console.log('Get your beauty rest');
  } else {
    console.log('Go to work');
  }
};

sleepIn(true, true);

/* Describe the step-by-step solution in english, then create the javascript to code it.
If today is vacation then sleep in otherwise is it a weekend?
if today is not vacation and it is a weekday then sound the alarm and get to work */
