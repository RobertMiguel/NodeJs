import { Router } from 'express';
import { BooksController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Router Default');
});

router.post('/books', BooksController.create);

export { router };
