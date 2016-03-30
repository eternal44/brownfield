import { expect } from 'chai';
import app from '../../server/server-config';

const request = require('supertest').agent(app.listen());

describe('GET /api/users', () => {
  it('should return an array of all users', done => {
    request
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.at.least(1);
      }, done());
  });
});

describe('GET /api/users/:userId', () => {
  it('should return an object for that user', done => {
    request
      .get('/api/users/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
      });
  });
});