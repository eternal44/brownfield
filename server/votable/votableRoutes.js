let votableController = require('./votableController');

module.exports = (app =>{
  app.route('/')
    .post(votableController.newVotable)
    .get(votableController.dummy)
});
