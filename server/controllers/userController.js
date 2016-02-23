import User from '../db/models/userModel';

export default {
  userGet: (req, res) => {
    res.json({
      user:'Luke'
    });
  },
  userPost: (req, res) => {
    res.json({
      user: 'Luke'
    });
  }
}