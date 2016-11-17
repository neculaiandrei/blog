const express = require('express');
const postsController = require('../controllers/postsController');

const postsRouter = express.Router();

postsRouter.route('/')
  .get(postsController.getAll)
  .post(postsController.create);

postsRouter.route('/:id')
  .get(postsController.get)
  .put(postsController.update)
  .delete(postsController.delete);

module.exports = postsRouter;
