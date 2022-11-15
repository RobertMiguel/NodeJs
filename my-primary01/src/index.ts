import express, {Request,Response,NextFunction} from "express";
import usersRouter from "./routes/users.router";

const app = express()

app.use(usersRouter)
app.get('/status', (req: Request,res: Response,next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso'})
});

app.listen(300, ()=>{
    console.log('Aplicação executando na porta 300')
})