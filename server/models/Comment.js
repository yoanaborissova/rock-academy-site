const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: {
    type: Schema.Types.String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article'
  },
  content: {
    type: Schema.Types.String,
    required: true
  },
  date: {
    type: Schema.Types.Date,
    default: Date.now 
  }
});

module.exports = mongoose.model('Comment', commentSchema);