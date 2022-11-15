import { Router,Request, Response, NextFunction } from "express";
import {StatusCodes} from "http-status-codes"

const usersRouter = Router();   

usersRouter.get('/users', (req: Request,res: Response,next: NextFunction)=>{
    const users = [{ userName : 'Robert' }];
    res.status(StatusCodes.OK).send({users});
});
usersRouter.get('/users/:uidd', (req: Request<{ uuid:string }>,res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    res.status(200).send({ uuid});
});



export default usersRouter;