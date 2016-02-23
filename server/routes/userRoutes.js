import userController from '../controllers/userController';

export default router => {
  router.post('/', userController.userPost);
  router.get('/', userController.userGet);
}