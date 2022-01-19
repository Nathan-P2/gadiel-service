import { Router } from 'express';

const contentRouter = Router();

contentRouter.get('/', (req, res) => res.status(200).json({ message: 'Content was successfully worked!' }));

export default contentRouter;
