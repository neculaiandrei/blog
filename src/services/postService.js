const mongoose = require('mongoose');
const Post = require('../models/post');

const postService = {
  getAll: () => new Promise((resolve, reject) => {
    Post.find({}, (error, posts) => {
      if (error) {
        reject(error);
      } else {
        resolve(posts);
      }
    });
  }),

  getById: id => new Promise((resolve, reject) => {
    Post.findById(id, (error, post) => {
      if (error) {
        reject(error);
      } else {
        resolve(post);
      }
    });
  }),

  create: fields => new Promise((resolve, reject) => {
    const minPostTitleLength = 6;
    const post = new Post();
    post._id = mongoose.Types.ObjectId().toString();
    post.date = Date.now();
    post.title = fields.title;
    post.content = fields.content;

    if (post.title.length < minPostTitleLength) {
      reject('Be serious with the title');
    } else {
      post.save((error) => {
        if (error) {
          reject(error);
        } else {
          resolve(post);
        }
      });
    }
  }),

  update: (id, fields) => new Promise((resolve, reject) => {
    postService.getById(id)
      .then((post) => {
        Object.assign(post, {
          title: fields.title,
          content: fields.content,
        });

        post.save((error) => {
          if (error) {
            reject(error);
          } else {
            resolve(post);
          }
        });
      })
      .catch(reject);
  }),

  delete: id => new Promise((resolve, reject) => {
    postService.getById(id)
      .then((post) => {
        post.remove((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      })
      .catch(reject);
  }),
};

module.exports = postService;
