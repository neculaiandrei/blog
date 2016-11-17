import delay from './delay';
import posts from './data';

const generateId = () => Math.floor((Math.random() * 10000) + 1);

class PostApi {
  static getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }

  static save(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minPostTitleLength = 3;
        if (post.title.length < minPostTitleLength) {
          reject(`Title must be at least ${minPostTitleLength} characters.`);
        }

        if (post.id) {
          const existingPostIndex = posts.findIndex(a => a.id === post.id);
          posts.splice(existingPostIndex, 1, post);
        } else {
          post.id = generateId();
          posts.push(post);
        }

        resolve(Object.assign({}, post));
      }, delay);
    });
  }

  static delete(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfPostToDelete = posts.findIndex(post =>
          post.id === postId
        );
        posts.splice(indexOfPostToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PostApi;

