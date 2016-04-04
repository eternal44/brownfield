import path from 'path';
import compression from 'compression';
// import routers
import postRouterConfig from '../routes/postRoutes';
import userRouterConfig from '../routes/userRoutes';
import voteRouterConfig from '../routes/voteRoutes';
import { errorHandler, logError } from './utils';
import { urlencoded, json } from 'body-parser';
import morgan from 'morgan';
import { createClient } from 'redis';

export default (app, express) => {
  let postRouter = express.Router();
  let userRouter = express.Router();
  let voteRouter = express.Router();
  
  let client = createClient();
  
  client.on('connect', function() {
    console.log('connected');
  });

  // logs incoming requests during development morgan
  app.use(morgan('dev'));
  app.use(urlencoded({
    extended: true
  }));
  app.use(json());
  // parses incoming request for json and url encoded
  // gzip compression middleware that decreases the size of the response body: increases speed
  app.use(compression());
  // error handling function from the utils
  app.use(errorHandler);
  //error logging function from the utils
  app.use(logError);
  // sending static files
  app.use(express.static(path.join(__dirname, '/../../dist')));
  app.use('/style', express.static(path.join(__dirname, '/../../style')));

  app.use('/api/posts', postRouter);
  app.use('/api/users', userRouter);
  app.use('/api/votes', voteRouter);

  postRouterConfig(postRouter);
  userRouterConfig(userRouter);
  voteRouterConfig(voteRouter);
}
