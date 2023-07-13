import { Router } from 'express';

const router = Router();

router.post('/test', (req, res) => {
  console.log(req.body);
  return res.json(req.body);
});

export { router };
