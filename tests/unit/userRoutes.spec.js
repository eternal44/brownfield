import {
  expect,
  should
}
from 'chai';

import server from '../../server/config/server-config';

const request = require('supertest').agent(server.listen());

describe('get request to /api/user', () => {
  it('should respond with status code 200', done => {
    request
      .get('/api/user')
      .expect(200)
      .done()
  });
}); 