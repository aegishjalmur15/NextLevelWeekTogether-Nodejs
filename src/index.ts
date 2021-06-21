import Express from "express";

const app = Express();

app.get("/base", (req,res)=>{
    res.json("all fine!");
})

app.listen(3030, ()=>{
    console.warn("SERVER ON-LINE");
})