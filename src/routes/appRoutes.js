import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import config from '../config';
import postService from '../services/postService';
import AppRoutes from '../app/scripts/AppRoutes';
import AdminRoutes from '../app/scripts/AdminRoutes';
import configureStore from '../app/scripts/store/configureStore';

const appRouter = (req, res, next) => {
  if (config.isomorphic) {
    match({ routes: [AdminRoutes, AppRoutes], location: req.url },
    (error, redirectLocation, renderProps) => { // eslint-disable-line consistent-return
      if (error) {
        return next(error);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      if (!renderProps) {
        res.sendStatus(404);
      }

      postService.getAll().then((posts) => {
        const plainPosts = posts.map((post) => {
          const plainPost = post.toObject();
          plainPost._id = plainPost._id.toString();

          return plainPost;
        });

        const store = configureStore({
          posts: plainPosts,
          loading: false,
        });

        const component = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        const state = store.getState();
        const serializedState = JSON.stringify(state);
        const markup = renderToString(component);

        res.render('index', { markup, serializedState });
      });
    });
  } else {
    res.render('index', {
      markup: undefined,
      serializedState: undefined,
    });
  }
};

export default appRouter;
