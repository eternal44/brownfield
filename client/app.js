import angular from 'angular';
import angularFire from 'angularfire';
import uiRouter from 'angular-ui-router';
import { PostsController } from './controllers/postsController';
import { LoginController } from './controllers/loginController';
import { ghettoDB } from './services/postsGhettoDB'

export default angular.module('brownfield', [
  uiRouter
])

.controller('PostsController', PostsController)
.controller('LoginController', LoginController)
.service('ghettoDB', ghettoDB)

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('login');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .state('posts', {
      url: '/posts',
      templateUrl: '/views/posts.html',
      controller: 'PostsController'
    });

})

