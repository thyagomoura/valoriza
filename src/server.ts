import express, { request } from "express";

//@types/express
const app = express();
/**
 * GET => buscar uma informação
 * POST => inserir uma informação(criaçao/algo novo)
 * PUT => alterar uma informação
 * DELETE => delete uma informação
 * PATcH => alterar uma informação especifica
 */

app.get("/test", (request, response) => {
    //request => tudo que esta entrando
    //response => tudo que esta saindo
    return response.send("OLA Funciona O GET");
})


app.post("/test-post", (request, response) => {
    return response.send("OLA funciona O POST");
})

//http://localhost:5000
app.listen(5000, () => console.log("Server is running"));