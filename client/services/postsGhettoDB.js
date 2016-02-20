// angular.module('brownfield.ghettoDB', [])
//   .factory('posts',() => {
//     let ghettoDB = {
//       posts: []
//     };
//     return ghettoDB;
//   });

class ghettoDB {
  constructor($http) {
    this.$http = $http;
    this.posts = [];
  }
}

export { ghettoDB }
