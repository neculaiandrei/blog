const postsRouter = require('./postsRoutes');

module.exports = app => app.use('/api/posts', postsRouter);

