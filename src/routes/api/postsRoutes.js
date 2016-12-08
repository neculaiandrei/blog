import express from 'express';
import postsController from '../../controllers/postsController';

const postsRouter = express.Router();

postsRouter.route('/')
  .get(postsController.getAll)
  .post(postsController.create);

postsRouter.route('/:id')
  .get(postsController.get)
  .put(postsController.update)
  .delete(postsController.delete);

postsRouter.route('/:id/pdf')
  .get(postsController.getPdf);

export default postsRouter;
