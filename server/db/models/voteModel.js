import db from '../db';
import Promise from 'bluebird';

export default {
  /* db query for user to vote for a post => left/right swipe 
  possible refactor lator to voteType being a number
  */
  userVoteForPost: (userId, postId, voteType) => {
    return new Promise((resolve, reject) => {
      let queryString = `insert into votes (voterID, postID, vote) values (${userId}, ${postId}, ${voteType}) returning *;`;
      
      db.query(queryString)
        .map(vote => {
          return vote.rows[0];
        })
        .subscribe(vote => {
          resolve(vote);
        },
        err => {
          reject(err);
        });
    });
  },
  // db query to update vote for post if you made a mistake voting. reverses the boolean value
  updateVoteForPost: (userId, postId, voteType) => {
    return new Promise((resolve, reject) => {
      let queryString = `update votes set vote=${voteType} where userID=${userId} and postID=${postId} returning *;`;
    });
  },
  /* Unvote function? deletes the previous vote on the post
  Not sure yet if this will take in the userId& post id or just voteId
  */
  deleteVoteForPost: (userId, postId) => {
    return new Promise((resolve, reject) => {
      let queryString = `delete from votes where voterID=${userId} and postID=${postId} returning *;`;
        
      db.query(queryString)
        .map(deletedVote => {
          if (deletedVote.rowCount) {
            return deletedVote.rows[0];
          } else {
            reject(new Error('the vote doesnt exist or could not be deleted'));
          }
        })
        .subscribe(deletedVote => {
          resolve(deletedVote);
        },
        err => {
          reject(err);
        });
    });
  },
  // function that gives you back the net rating for a post to decide whether you want it or not
  getVotesForPost: (postId) => {
    return new Promise((resolve, reject) => {
      let queryString = `select sum(vote) from votes left join posts on votes.postID=posts.id where posts.id=${postId};`;
      
      db.query(queryString)
        .map(netVote => {
          if (netVote.rowCount) {
            return netVote.rows[0];
          } else {
            reject(new Error('there is no net vote for this post'));
          }
        })
        .subscribe(netVote => {
          resolve(netVote);
        },
        err => {
          reject(err);
        });
    });
  },
  // function that gets all vote history for a user
  getVotesForUser: (userId) => {
    return new Promise((resolve, reject) => {
      let queryString = `select * from votes left join posts on votes.postID=posts.id where votes.voterID=${userId};`;
      
      db.query(queryString)
        .map(votes => {
          if (votes.rowCount) {
            return votes.rows;
          } else {
            reject(new Error('user has not voted for any posts'));
          }
        })
        .subscribe(votes => {
          resolve(votes);
        },
        err => {
          reject(err);
        });
    });
  }
}