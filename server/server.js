import server from './config/server-config';

require('dotenv').config();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
