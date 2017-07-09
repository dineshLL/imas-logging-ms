import express from 'express';
import TestCtrl from '../controllers/test.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(TestCtrl.test);

export default router;
