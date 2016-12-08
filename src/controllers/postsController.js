import markdownPdf from 'markdown-pdf';
import postService from '../services/postService';

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

  getPdf: (req, res) => {
    const id = req.params.id;

    postService.getById(id)
      .then((post) => {
        markdownPdf()
          .from
          .string(post.content)
          .to
          .buffer(undefined, (otherParam, buffer) => {
            res.type('application/pdf');
            res.end(buffer, 'binary');
          });
      })
      .catch(() => res.sendStatus(500));
  },
};

export default postsController;
