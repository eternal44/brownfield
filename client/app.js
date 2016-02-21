angular.module('truu', [
  'ui.router',
  'truu.loginController',
  'truu.postsController'
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

