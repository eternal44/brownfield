import { join } from 'path';
import postRouteConfig from '../posts/postRoutes';

export default (app, express) => {
  let postRouter = express.Router();

  app.use(express.static(join(__dirname, '../../client')));
  app.use('/scripts', express.static(join(__dirname, '/../../node_modules')));

  app.use('/api/posts', postRouter);

  postRouteConfig(postRouter);
};
