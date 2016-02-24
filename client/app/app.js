require('angular');
require('angular-ui-router');
require('firebase');
require('angularfire');
require('angular-material');
var loginController = require('./controllers/loginController');
var postsController = require('./controllers/postsController');

angular.module('truu', [
  'ui.router',
  'ngMaterial'
])
.controller('LoginController', loginController)
.controller('PostsController', postsController)

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('login');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/views/login.html',
      controller: 'LoginController',
    })
    .state('posts', {
      url: '/posts',
      templateUrl: 'app/views/posts.html',
      controller: 'PostsController'
    });

});

