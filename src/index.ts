import 'reflect-metadata';
import Express from "express";
import { routes } from './routes';
import "./database";

const app = Express();
app.use(Express.json());
app.use(routes);

app.listen(3030, ()=>{
    console.warn("SERVER ON-LINE");
})