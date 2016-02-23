import Vote from '../db/models/voteModel';

export default {
  voteGet: (req, res) => {
    res.json({
      voteType: true
    });
  },
  votePost: (req, res) => {
    res.json({
      voteType: false
    });
  }
}