import express from 'express';
import { join } from 'path';

let app = express();

require('./config/middleware.js')(app, express, join);
require('./votable/votableRoutes.js')(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('listening on port ', port);
});
