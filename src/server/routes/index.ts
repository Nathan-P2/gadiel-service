import { Router } from 'express';
import contentRouter from './content.routes';

const router = Router();

router.use('/content', contentRouter);

export default router;
