Package.describe({
  summary: "Login service for Facebook accounts (works with cordova)"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('facebook', ['client', 'server']);
  
  api.use('service-configuration', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'server');

  api.add_files('facebook_server.js', 'server');
  api.add_files("facebook.js");
});
