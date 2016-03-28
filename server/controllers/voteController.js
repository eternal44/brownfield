import Vote from '../db/models/voteModel';
import { isEmpty } from 'lodash';

export default {
  /* function for vote get request for a post  => gets back all votes for a 
  single post*/
  voteGetForAPost: (req, res, next) => {
    if (req.params.postId) {
      
    } else {
      next(new Error('must pass in a post id as a url parameter'));
    }
  },
  
  /* function for vote get request for a user => gets back all votes that a user 
  has posted (could be used for vote history?) */
  voteGetForAUser: (req, res, next) => {
    
  },
  
  /* function for vote post request by a voter to a post => creates an entry in 
  the database with the vote weight property which is a number (positive or negative)  this number is decided by 
  a credibility for voting that they build up to */
  votePost: (req, res, next) => {
    res.json({
      voteType: false
    });
  },
  
  /* function for vote put request: for if a user makes a mistake on voting or if 
  they change their mind about some vote they posted. required params userId, postId, voteWeight*/
  votePut: (req, res, next) => {
    
  },
  
  /* function for vote delete request: when a user wants to delete their 
  vote... not sure when this will be used yet */
  voteDelete: (req, res, next) => {
    
  } 
}