import postsRouter from './api/postsRoutes';
import appRouter from './appRoutes';

const routes = (app) => {
  app.use('/api/posts', postsRouter);
  app.use('/', appRouter);
};

export default routes;
