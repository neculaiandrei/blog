const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const post = new Schema({
  _id: {
    type: String,
  },
  date: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model('Post', post);
