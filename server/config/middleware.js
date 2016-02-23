import path from 'path';
import compression from 'compression';
// import routers
import postRouterConfig from '../routes/postRoutes';
import userRouterConfig from '../routes/userRoutes';
import voteRouterConfig from '../routes/voteRoutes';

export default (app, express) => {
  let postRouter = express.Router();
  let userRouter = express.Router();
  let voteRouter = express.Router();

  // gzip compression middleware that decreases the size of the response body: increases speed
  app.use(compression());
  // sending static files
  app.use(express.static(path.join(__dirname, '/../../client')));
  // sending the angular-material folder for the style sheet
  app.use('/stylesheet', express.static(path.join(__dirname, '/../../node_modules/angular-material/')));

  app.use('/api/posts', postRouter);
  app.use('/api/user', userRouter);
  app.use('/api/vote', voteRouter);

  postRouterConfig(postRouter);
  userRouterConfig(userRouter);
  voteRouterConfig(voteRouter);
}
