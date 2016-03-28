import express from 'express';
// import db from '../db/db';
import { parse } from 'url';
import middleware from './middleware';
import { createServer } from 'http';
// http server
let server = createServer();

// web socket server
const WebSocketServer = require('ws').Server;
// make wss with http server
let wss = new WebSocketServer({server})

let app = express();
// make server into http server
middleware(app, express);

wss.on('connection', ws => {
  let location = parse(ws.upgradeReq.url, true);
  
  ws.on('message', message => {
    console.log(`received: ${message}`);
    ws.send('something');
  });
});

server.on('request', app);

export default server;