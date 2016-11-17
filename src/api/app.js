const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const router = require('./routes');

const app = express();

const connect = () => {
  const options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.Promise = global.Promise;
  return mongoose.connect(config.db, options).connection;
};

const listen = () => {
  app.listen(config.port, () => console.log(`Running...${config.port}`));
};

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

router(app);

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);
