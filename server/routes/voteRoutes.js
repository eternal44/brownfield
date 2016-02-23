import voteController from '../controllers/voteController';

export default router => {
  router.get('/', voteController.voteGet);
  router.post('/', voteController.votePost);
}