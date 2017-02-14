import path from 'path';

const config = {
  db: 'mongodb://127.0.0.1:27017/blog',
  port: process.env.PORT || 11921,
  root: path.join(__dirname, '../../'),
  isomorphic: true,
};

export default config;
