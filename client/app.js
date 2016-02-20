import angular from 'angular';
import angularFire from 'angularfire';
import uiRouter from 'angular-ui-router';
import { PostsController } from './controllers/postsController';
import { SignUpController } from './controllers/signUpController';
import { ghettoDB } from './services/postsGhettoDB'

export default angular.module('brownfield', [
  uiRouter
])

.controller('PostsController', PostsController)
.controller('SignUpController', SignUpController)
.service('ghettoDB', ghettoDB)

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('signup');

  $stateProvider
    .state('signup', {
      url: '/signup',
      templateUrl: '/views/signup.html',
      controller: 'SignUpController'
    })
    .state('posts', {
      url: '/posts',
      templateUrl: '/views/posts.html',
      controller: 'PostsController'
    });

})

