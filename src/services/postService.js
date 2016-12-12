import randomstring from 'randomstring';
import Post from '../models/post';

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
    const post = new Post();
    post.title = fields.title;
    post.slug = fields.slug;
    post.content = fields.content;
    post.tags = fields.tags;
    post.isPublished = false;
    post.dateCreated = Date.now();
    post.datePublished = undefined;

    postService.adjustSlug(post)
      .then((postWithAdjustedSlug) => {
        postWithAdjustedSlug.save((error) => {
          if (error) {
            reject(error);
          } else {
            resolve(postWithAdjustedSlug);
          }
        });
      });
  }),

  update: (id, fields) => new Promise((resolve, reject) => {
    postService.getById(id)
      .then((post) => {
        Object.assign(post, {
          title: fields.title,
          slug: fields.slug,
          content: fields.content,
          tags: fields.tags,
          isPublished: fields.isPublished,
        });

        if (post.isPublished) {
          post.datePublished = Date.now();
        }

        postService.adjustSlug(post)
          .then((postWithAdjustedSlug) => {
            postWithAdjustedSlug.save((error) => {
              if (error) {
                reject(error);
              } else {
                resolve(postWithAdjustedSlug);
              }
            });
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

  adjustSlug: post => new Promise((resolve, reject) => {
    Post.find({ slug: post.slug, _id: { $ne: post._id } }, (error, posts) => {
      if (error) {
        reject(error);
      } else {
        if (posts.length >= 1) {
          post.slug = `${post.slug}_${randomstring.generate(3)}`;
        }

        resolve(post);
      }
    });
  }),
};

export default postService;
