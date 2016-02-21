var path = require('path');
var postRouteConfig = require('../posts/postRoutes');

module.exports = function(app, express){
  var postRouter = express.Router();

  app.use(express.static(path.join(__dirname, '/../../client')));
  app.use('/scripts', express.static(path.join(__dirname, '/../../node_modules/')));

  app.use('/api/posts', postRouter);

  // postRouteConfig(postRouter);
};
