require('angular');
require('angular-ui-router');
require('firebase');
require('angularfire');
require('angular-material');
require('./controllers/loginController');
require('./controllers/postsController');

angular.module('truu', [
  'ui.router',
  'truu.loginController',
  'truu.postsController',
  'ngMaterial'
])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('login');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginController',
    })
    .state('posts', {
      url: '/posts',
      templateUrl: '/views/posts.html',
      controller: 'PostsController'
    });

})

