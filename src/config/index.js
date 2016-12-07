import path from 'path';

const config = {
  db: 'mongodb://localhost:27017/blog',
  port: process.env.PORT || 11921,
  root: path.join(__dirname, '../../'),
  isomorphic: false,
};

export default config;
