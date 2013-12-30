geotz = function() {};

// location  - lat,lon string
// timestamp - Unix timestamp, if false then current timestamp used.
// callback  - Callback function
geotz.timezone = function(location,timestamp,callback) {
  if ( timestamp == null || timestamp == false ) {
    timestamp = Math.round(new Date().getTime()/1000.0);
  }
  var tzUrl = 'https://maps.googleapis.com/maps/api/timezone/json?location='+location+'&timestamp='+timestamp+'&sensor=false';
  HTTP.call("GET", tzUrl, {}, function(error,tz){
    var data = false;

    if(!error)
      data = tz.data;

    callback(error,data);
  });
  return;
};

/* EXAMPLE USAGE:

geotz.timezone('37.55856195,126.92565677',false,function(error,tz){
  console.log(tz);
});

*/