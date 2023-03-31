import express from "express";
import statusRouter from "./routes/status.router";
import usersRouter from "./routes/users.router";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRouter);
app.use(statusRouter)

app.listen(300, () => {
    console.log('Aplicação executando na porta 300')
})
