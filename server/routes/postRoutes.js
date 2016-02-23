import postController from '../controllers/postController';

export default router => {
  router.get('/', postController.postGet);
  router.post('/', postController.postPost);
}
