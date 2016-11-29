import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes';

const app = express();

const connect = () => {
  const options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.Promise = global.Promise;
  return mongoose.connect(config.db, options).connection;
};

const listen = () => {
  app.listen(config.port, () => console.log(`Running...${config.port}`));
};


app.use(express.static(`${config.root}/dist/public`));
app.set('views', `${config.root}/dist/views`);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

routes(app);

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);
