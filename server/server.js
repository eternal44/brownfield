import express from 'express';
import { join } from 'path';

let app = express();
const port = process.env.PORT || 4000;

app.use(express.static(join(__dirname, '../client')));

app.listen(port, () => {
  console.log('listening on port ', port);
});
