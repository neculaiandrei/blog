const path = require('path');

module.exports = {
  db: 'mongodb://localhost:27017/blog',
  port: process.env.PORT,
  root: path.join(__dirname, '../../'),
};
