angular.module('truu.ghettoDB', [])
  .factory('posts',() => {
    let ghettoDB = {
      posts: []
    };
    return ghettoDB;
  });

