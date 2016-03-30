import { expect } from 'chai';
import app from '../../server/server-config';

const request = require('supertest').agent(app.listen());

describe('GET /api/votes/post/:postId', () => {
  it('should return all votes for a specific post', done => {
    request
      .get('/api/votes/post/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.at.least(1);
      });
  });
});

describe('GET /api/votes/user/:userId', () => {
  it('should return all votes made by a specific user', done => {
    request
      .get('/api/votes/user/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.at.least(1);
      }, done());
  });
});