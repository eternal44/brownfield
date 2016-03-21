import userController from '../controllers/userController';

export default router => {
  router.post('/', userController.userPost);
  router.get('/:userId', userController.userGetUserId);
  router.get('/', userController.userGetNoParams);
  router.delete('/:userId', userController.userDelete);
}