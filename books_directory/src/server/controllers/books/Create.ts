import { Request, Response } from 'express';

interface IBooks {
  name: string;
  value: number;
  register: string
}

export const create = (req: Request<{}, {}, IBooks>, res: Response) => {


  console.log(req.body.name);

  return res.send('Create !');
};
