require('angular');
require('angular-ui-router');
require('firebase');
require('angularfire');
require('angular-material');
require('./controllers/loginController');
require('./controllers/postsController');
require('./services/authService');

angular.module('truu', [
  'ui.router',
  'truu.loginController',
  'truu.postsController',
  'truu.authService',
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
      controller: 'PostsController',
      authenticate: true
    });

})

.run(function($rootScope, $state, Auth){
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams){
    // redirect user to 'login' if not logged in and state requires auth
    if(!Auth.isLoggedIn && toState.authenticate){
      event.preventDefault();
      $state.go('login');
    }
  });
});

