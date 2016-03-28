import voteController from '../controllers/voteController';

export default router => {
  router.get('/post/:postId', voteController.voteGetForAPost);
  router.get('/user/:userId', voteController.voteGetForAUser);
  router.post('/', voteController.votePost);
  router.put('/', voteController.votePut);
  router.delete('/', voteController.voteDelete);
}