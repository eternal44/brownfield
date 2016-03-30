import { expect } from 'chai';
import app from '../../server/server-config';

const request = require('supertest').agent(app.listen());

describe('GET /api/posts', () => {
  it('should return an array of objects', done => {
    request
      .get('/api/posts')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.at.least(1);
      }, done());
  });
});

describe('GET /api/posts/:userId', () => {
  it('should return all posts by a user', done => {
    request 
      .get('/api/posts/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.at.least(1);
      }, done());
  });
});