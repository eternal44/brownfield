import Vote from '../db/models/voteModel';
import { isEmpty } from 'lodash';

export default {
  /* function for vote get request for a post  => gets back net vote for a 
  single post*/
  voteGetForAPost: ({ params: { postId }}, res, next) => {
    if (postId) {
      Vote.getVotesForPost(postId)
        .then(netVote => {
          res.json(netVote);
        })
        .catch(err => {
          next(err);
        });
        
    } else {
      next(new Error('must pass in a post id as a url parameter'));
    }
  },
  
  /* function for vote get request for a user => gets back all votes that a user 
  has posted (could be used for vote history?) */
  // object destructuring on the req
  voteGetForAUser: ({params: { userId }}, res, next) => {
    if (userId) {
      Vote.getVotesForUser(userId)
        .then(votes => {
          res.json(votes);
        })
        .catch(err => {
          next(err);
        });
        
    } else {
      next(new Error('must pass in a user id as a url parameter'));
    }
  },
  
  /* function for vote post request by a voter to a post => creates an entry in 
  the database with the vote weight property which is a number (positive or negative)  this number is decided by 
  a credibility for voting that they build up to */
  votePost: ({body: { userId, postId, voteWeight}}, res, next) => {
    // need user id, post id and voteWeight
    if (userId && postId, voteWeight) {
      Vote.userVoteForPost(userId, postId, voteWeight)
        .then(createdVote => {
          res.json(createdVote);
        })
        .catch(err => {
          next(err);
        });
        
    } else {
      next(new Error('must send user id, post id and vote weight all in the body of this request'));
    }
  },
  
  /* function for vote put request: for if a user makes a mistake on voting or if 
  they change their mind about some vote they posted. required params userId, postId, voteWeight*/
  votePut: ({body: { userId, postId, voteWeight }}, res, next) => {
    /* need user id post id and voteweight.. 
    might be a better way to do this.. possible refactor later */
    if (userId && postId, voteWeight) {
      Vote.updateVoteForPost(userId, postId, voteWeight)
        .then(updatedVote => {
          res.json(updatedVote);
        })
        .catch(err => {
          next(err);
        });
        
    } else {
      next(new Error('must send user id, post id and vote weight all in the body of this request'));
    }
  },
  
  /* function for vote delete request: when a user wants to delete their 
  vote... not sure when this will be used yet */
  voteDelete: ({body: { userId, postId }}, res, next) => {
    // need userId and postId
    if (userId && postId) {
      Vote.deleteVoteForPost(userId, postId)
        .then(deletedVote => {
          res.json(deletedVote);
        })
        .catch(err => {
          next(err);
        });
        
    } else {
      next(new Error('must send userId and postId'));
    }
  } 
}