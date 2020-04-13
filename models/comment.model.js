const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema(
    {
      author: String,
      text: String,
  }, 
  { 
    timestamps: true 
  });

module.exports = mongoose.model('Comment', CommentsSchema);