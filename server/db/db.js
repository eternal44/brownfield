const pg = require('pg-rxjs');
require('dotenv').config();

const connectionString = `${process.env.DATABASE_URL}?ssl=true`;

const client = new pg.Pool(connectionString);

export default client;

// var client = new pg.Client({
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
//   host: process.env.PG_HOST,
//   ssl: true
// });
// client.connect();

// var createTables = '\
// CREATE TABLE "users" (\
// "id"  SERIAL ,\
// "name" VARCHAR(40) ,\
// "email" VARCHAR(40) ,\
// PRIMARY KEY ("id")\
// );\
// \
// CREATE TABLE "posts" (\
// "id"  SERIAL ,\
// "user_id" INTEGER ,\
// "item_name" VARCHAR(40) ,\
// "item_type" VARCHAR(40) ,\
// PRIMARY KEY ("id")\
// );\
// \
// CREATE TABLE "votes" (\
// "id"  SERIAL ,\
// "user_id" INTEGER ,\
// "post_id" INTEGER ,\
// "vote" BOOLEAN ,\
// PRIMARY KEY ("id")\
// );\
// \
// ALTER TABLE "posts" ADD FOREIGN KEY ("id_users") REFERENCES "users" ("id");\
// ALTER TABLE "votes" ADD FOREIGN KEY ("id_users") REFERENCES "users" ("id");\
// ALTER TABLE "votes" ADD FOREIGN KEY ("id_posts") REFERENCES "posts" ("id");\
// ';

// var query = client.query(createTables);

// query.on('end', function() { client.end(); });

