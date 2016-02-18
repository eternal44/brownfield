import votableController from './votableController';

export default app =>{
  app.route('/')
    .post(votableController.newVotable)
    .get(votableController.dummy)
};
