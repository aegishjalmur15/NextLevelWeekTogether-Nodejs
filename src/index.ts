import 'reflect-metadata';
import Express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import { routes } from './routes';
import "./database";

const app = Express();
app.use(Express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.json({message: err.message}).status(400)
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3030, ()=>{
    console.warn("SERVER ON-LINE");
})