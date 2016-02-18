import { join } from 'path';
import votableRouteConfig from '../votable/votableRoutes';

export default (app, express) => {
  let votableRouter = express.Router();

  app.use(express.static(join(__dirname, '../../client')));

  app.use('/api/votables', votableRouter);

  votableRouteConfig(votableRouter);
};
