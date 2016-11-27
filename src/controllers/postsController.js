const postService = require('../services/postService');

const postsController = {
  getAll: (req, res) => {
    postService.getAll()
      .then(posts => res.json(posts))
      .catch(() => res.sendStatus(500));
  },

  get: (req, res) => {
    const id = req.params.id;

    postService.getById(id)
      .then(post => res.json(post))
      .catch(() => res.sendStatus(500));
  },

  create: (req, res) => {
    postService.create(req.body)
      .then(post => res.json(post))
      .catch(() => res.sendStatus(500));
  },

  update: (req, res) => {
    const id = req.params.id;

    postService.update(id, req.body)
      .then(post => res.json(post))
      .catch(() => res.sendStatus(500));
  },

  delete: (req, res) => {
    const id = req.params.id;

    postService.delete(id)
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  },
};

module.exports = postsController;
