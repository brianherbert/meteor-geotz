Package.describe({
  summary: "Geo TZ, a Meteor package for the Google Time Zone API."
});

Package.on_use(function (api, where) {
  //where = where || ['client', 'server'];
  //api.use("geotz", where);
  if(api.export) {
    api.export('geotz');
  }
  api.use('http', where);
  api.add_files('lib/geotz.js', where);
});
