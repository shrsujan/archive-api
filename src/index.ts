import 'babel-polyfill';

import * as cors from 'cors';
import * as helmet from 'helmet';
import * as express from 'express';
import * as log from 'winston-logger-setup';
import * as bodyParser from 'body-parser';

import config from './config';
import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(config.port, () => log.cnsl(`Listening to port ${config.port}`));

export default app;
