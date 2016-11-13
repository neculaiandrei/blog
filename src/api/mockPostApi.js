import delay from './delay';

const posts = [
  {
    id: '1',
    date: '18 Septembrie 2016',
    title: 'Praesent viverra',
    content: 'Paragraphs are separated by a blank line.',
  },
  {
    id: '2',
    date: '19 Septembrie 2016',
    title: 'Fusce faucibus lectus',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in arcu mollis, sagittis augue ac, ultricies ligula. Sed suscipit sem eu pulvinar laoreet. Nulla quis gravida ex. Nunc sem massa, luctus at ultrices quis, commodo eget neque. Aenean a risus tempor, varius dui a, viverra turpis. Etiam ac mauris ac dui malesuada semper.',
  },
  {
    id: '3',
    date: '19 Septembrie 2016',
    title: 'Quisque quis urna nisi',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in arcu mollis, sagittis augue ac, ultricies ligula. Sed suscipit sem eu pulvinar laoreet. Nulla quis gravida ex. Nunc sem massa, luctus at ultrices quis, commodo eget neque. Aenean a risus tempor, varius dui a, viverra turpis. Etiam ac mauris ac dui malesuada semper.',
  },
  {
    id: '4',
    date: '19 Septembrie 2016',
    title: 'Donec sit ame',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in arcu mollis, sagittis augue ac, ultricies ligula. Sed suscipit sem eu pulvinar laoreet. Nulla quis gravida ex. Nunc sem massa, luctus at ultrices quis, commodo eget neque. Aenean a risus tempor, varius dui a, viverra turpis. Etiam ac mauris ac dui malesuada semper.',
  },
];

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

