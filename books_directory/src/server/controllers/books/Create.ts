import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';



interface IBooks {
  name: string;
  value: number;
  register: string
}

const bodyValidation: yup.ObjectSchema<IBooks> = yup.object().shape({
  name: yup.string().required().min(3),
  value: yup.number().required().min(3),
  register: yup.string().required().min(3),

});

export const create = async (req: Request<{}, {}, IBooks>, res: Response) => {


  const validateData: IBooks | undefined = undefined;

  console.log(req.body.name);

  try {
    await bodyValidation.validate(req.body, { abortEarly: false });
  } catch (err) {

    const yupError = err as yup.ValidationError;

    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {

      if (!error.path) return;



      errors[error.path] = error.message;

    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });

  }

  console.log(validateData);

  return res.send('Create !');

};
