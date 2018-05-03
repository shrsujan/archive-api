import * as express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('welcome to archive api');
});

export default router;
