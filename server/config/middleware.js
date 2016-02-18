module.exports = function(app, express, join){
  let votableRouter = express.Router();

  app.use(express.static(join(__dirname, '../client')));

  app.use('/api/votables', votableRouter);

  require('../votable/votableRoutes')(votableRouter);
};
