import 'babel-polyfill';

import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as log from './utlis/logger';

import config from './config';
import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan(':method :url [:status] ---- :response-time ms', { stream: log.logStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(config.port, () => {
  log.cnsl(`Listening to port ${config.port}`);
  log.cnsl(`http://localhost:${config.port}`);
});

export default app;
