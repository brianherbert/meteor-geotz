meteor-geotz
============

Geo TZ, a Meteor package for the Google Time Zone API.

### Install via Meteorite
mrt add geotz

### Usage

You must pass a "latitude,longitude" string to get the timezone for that location. You may optionally pass a unix timestamp to get the timezone for that particular time to take into account daylight savings. If you pass `false` instead of a timestamp, the current time will be used. The third parameter is a callback function.

```javascript
geotz.timezone('37.55856195,126.92565677',1388375868,function(error,tz){
  console.log(tz);
});
```

### Notes
This uses the Google Time Zone API, documented here: https://developers.google.com/maps/documentation/timezone/ - The response you get is the same JSON response documented there.