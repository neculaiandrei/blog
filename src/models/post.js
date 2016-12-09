import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const post = new Schema({
  date: {
    type: Date,
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
