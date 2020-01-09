import express from 'express';
import students from './students';

const router = express.Router();

router.use(express.json());

router.use('/users', students);

export default router;