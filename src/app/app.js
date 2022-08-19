require('dotenv').config();
const express = require('express');
const morgan = require("morgan");

const app = express();


app.use(express.json());
app.use(morgan("dev"));

app.get("/", (request,response) => {
  return response.status(200).json({
    app:"Todo List",
    description:"Somente mais uma API de todo list",
    author:{
      name:"André Souza",
      email:"andresouza@meraki.dev.br"
    }
  })
});

module.exports = app;
