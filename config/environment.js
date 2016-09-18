/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-todo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    apiURL: 'http://localhost:4000',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'production'){
    
  }
  if (environment === 'development') {
    
  }

  ENV['ember-cli-mirage'] = {
    enabled: false
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    routeAfterAuthentication: 'todo-lists',
    routeIfAlreadyAuthenticated: 'todo-lists'
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: `${ENV.apiURL}/auth`,
    identificationField: 'email'
  };



  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
