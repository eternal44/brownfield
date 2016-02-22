// var path = require('path');
// var postRouteConfig = require('../posts/postRoutes');

import path from 'path'
import postRouteConfig from '../posts/postRoutes'

export default function(app, express){
  var postRouter = express.Router();

  app.use(express.static(path.join(__dirname, '/../../client')));
  app.use('/stylesheet', express.static(path.join(__dirname, '/../../node_modules/angular-material/')));

  app.use('/api/posts', postRouter);

  postRouteConfig(postRouter);
};
