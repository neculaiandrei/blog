import delay from './delay';

const posts = [
  {
    id: '1',
    date: '18 Septembrie 2016',
    title: 'Praesent viverra',
    content: `Paragraphs are separated by a blank line.

    2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
    look like:

      * this one
      * that one
      * the other one

    Note that --- not considering the asterisk --- the actual text
    content starts at 4-columns in.

    > Block quotes are
    > written like so.
    >
    > They can span multiple paragraphs,
    > if you like.

    Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
    in chapters 12--14"). Three dots ... will be converted to an ellipsis.
    Unicode is supported. ☺`,
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
  static getAlls() {
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
          post.splice(existingPostIndex, 1, post);
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

