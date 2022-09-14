const express = require("express");

const app = express();

app.get("/",function (req , resp){

    resp.send("Seja Bem-vindo ao meu app")
});

app.get("/contato",function (req , resp){

    resp.send("Pagina de contado do meu app")
});

app.get("/Produto",function (req , resp){

    resp.send("Pagina do produto  contado do meu app")
});

app.listen(8081, function(){
    console.log("O servidor está funcionando na url http://localhost:8081");
});

