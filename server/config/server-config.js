import express from 'express';
// import db from '../db/db';
import middleware from './middleware';
import http from 'http';

let app = express();
// make server into http server
let server = http.Server(app);
middleware(app, express);

export default server;