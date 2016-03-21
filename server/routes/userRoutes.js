import userController from '../controllers/userController';

export default router => {
  router.get('/:userId', userController.userGetUserId);
  router.get('/', userController.userGetNoParams);
  router.post('/', userController.userPost);
  router.put('/:userId', userController.userPut)
  router.delete('/:userId', userController.userDelete);
}