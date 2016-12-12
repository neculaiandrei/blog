import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const post = new Schema({
  title: {
    type: String,
    minLenght: [6, 'Be serious with the title'],
  },
  slug: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: [String],
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
