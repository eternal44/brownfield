import express from 'express';
import middleware from './config/middleware';

let app = express();

middleware(app, express);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('listening on port ', port);
});
