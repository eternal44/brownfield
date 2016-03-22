import db from '../db';
import Promise from 'bluebird';

export default {
  // db query for user to vote for a post => left/right swipe
  userVoteForPost: (userId, postId, voteType) => {
    return new Promise((resolve, reject) => {
      let queryString = ``;
    });
  },
  // db query to update vote for post if you made a mistake voting
  updateVoteForPost: (userId, postId, voteType) => {
    return new Promise((resolve, reject) => {
      let queryString = ``;
    });
  },
  // function that gives you back the net rating for a post to decide whether you want it or not
  getVotesForPost: () => {
    return new Promise((resolve, reject) => {
      let queryString = ``;
    });
  }
}