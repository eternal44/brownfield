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
  app.use(express.static(path.join(__dirname, '/../../dist')));
  app.use('/style', express.static(path.join(__dirname, '/../../style')));

  app.use('/api/posts', postRouter);
  app.use('/api/user', userRouter);
  app.use('/api/vote', voteRouter);

  postRouterConfig(postRouter);
  userRouterConfig(userRouter);
  voteRouterConfig(voteRouter);
}
