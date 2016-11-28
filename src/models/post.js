import mongoose from 'mongoose';

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

const model = mongoose.model('Post', post);

export default model;
