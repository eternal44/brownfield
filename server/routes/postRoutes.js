import postController from '../controllers/postController';

export default router => {
  router.get('/', postController.dashboardPostsGet);
  router.get('/:userId', postController.userPostsGet);
  router.post('/', postController.postPost);
  router.put('/:postId', postController.postUpdate);
  router.delete('/:postId', postController.postDelete);  
}
