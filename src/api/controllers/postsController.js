const Post = require('../models/post');

const postsController = {
  getAll: (req, res) => {
    Post.find({}, (err, posts) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(posts);
      }
    });
  },

  get: (req, res) => {
    const id = req.params.id;

    Post.findById(id, (err, post) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(post);
      }
    });
  },

  create: (req, res) => {
    const post = new Post();
    post.date = Date.now();
    post.title = req.body.title;
    post.content = req.body.content;

    post.save((err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  },

  update: (req, res) => {
    const id = req.params.id;

    Post.findById(id, (err, post) => {
      if (err) {
        res.sendStatus(500);
      } else {
        Object.assign(post, {
          title: req.body.title,
          content: req.body.content,
        });

        post.save((ex) => {
          if (ex) {
            res.sendStatus(500);
          } else {
            res.sendStatus(200);
          }
        });
      }
    });
  },

  delete: (req, res) => {
    const id = req.params.id;

    Post.findById(id, (err, post) => {
      if (err) {
        res.sendStatus(500);
      }

      post.remove((ex) => {
        if (ex) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    });
  },
};

module.exports = postsController;
