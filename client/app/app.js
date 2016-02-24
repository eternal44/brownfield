require('angular');
require('angular-ui-router');
require('firebase');
require('angularfire');
require('angular-material');
var loginController = require('./controllers/loginController');
var postsController = require('./controllers/postsController');
var landingController = require('./controllers/landingController');
var ngMaterialConfig = require('./config/ngMaterialConfig');
var routesConfig = require('./config/routes');

angular.module('truu', [
  'ui.router',
  'ngMaterial'
])
.controller('LoginController', loginController)
.controller('PostsController', postsController)
.controller('LandingController', landingController)

.config(ngMaterialConfig)

.config(routesConfig);

