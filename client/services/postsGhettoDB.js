angular.module('brownfield.ghettoDB', [])
  .factory('posts',() => {
    let ghettoDB = {
      posts: []
    };
    return ghettoDB;
  });

