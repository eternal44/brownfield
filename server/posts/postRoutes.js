import postController from './postController';

export default app =>{
  app.route('/')
    .post(postController.newVotable)
    .get(postController.dummy)
};
