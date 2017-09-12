let firstRepeat = function(str) {
  for (let i = 1; i < str.length; i++) {
      if (i !== 1) {
        if(str[i] !== str[i - 1]) {
            return str[i];
	        }
	    } else {
	        if(str[i] !== str[i - 1]) {
	            return str[i - 1];
	        }
	      }
	  }
	  return throws("String is all repeated");
    };
module.exports = firstRepeat;

//ab
