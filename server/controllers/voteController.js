import Vote from '../db/models/voteModel';
import { isEmpty } from 'lodash';

export default {
  /* function for vote get request for a post  => gets back net vote for a 
  single post*/
  voteGetForAPost: (req, res, next) => {
    if (req.params.postId) {
      Vote.getVotesForPost(req.params.postId)
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
  voteGetForAUser: (req, res, next) => {
    if (req.params.userId) {
      Vote.getVotesForUser(req.params.userId)
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
  votePost: (req, res, next) => {
    // need user id, post id and voteWeight
    if (req.body.userId && req.body.postId, req.body.voteWeight) {
      Vote.userVoteForPost(req.body.userId, req.body.postId, req.body.voteWeight)
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
  votePut: (req, res, next) => {
    /* need user id post id and voteweight.. 
    might be a better way to do this.. possible refactor later */
    if (req.body.userId && req.body.postId, req.body.voteWeight) {
      Vote.updateVoteForPost(req.body.userId, req.body.postId, req.body.voteWeight)
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
  voteDelete: (req, res, next) => {
    // need userId and postId
    if (req.body.userId && req.body.postId) {
      Vote.deleteVoteForPost(req.body.userId, req.body.postId)
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