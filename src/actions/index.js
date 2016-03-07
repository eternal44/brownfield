export function selectPost(post) {
  // console.log('A post has been selected: ', post.title);
  // selectPost is an ActionCreator, it needs to return an action, an object with a type property
  return {
    type: 'POST_SELECTED',
    payload: post
  };
}