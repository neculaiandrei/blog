import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const post = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  isPublished: {
    type: Boolean,
  },
  dateCreated: {
    type: Date,
  },
  datePublished: {
    type: Date,
  },
});

const model = mongoose.model('Post', post);

export default model;
