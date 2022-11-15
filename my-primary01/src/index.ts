import express, {Request,Response,NextFunction} from "express";

const app = express()

app.get('/status', (req: Request,res: Response,next: NextFunction) => {
    res.status(200).send({ foo: 'qualquer coisa, hello word, vamos aprender'})
});

app.listen(300, ()=>{
    console.log('Aplicação executando na porta 300')
})