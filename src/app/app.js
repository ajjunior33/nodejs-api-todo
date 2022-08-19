require('dotenv').config();
const express = require('express');
const morgan = require("morgan");
const routes = require("./routes/routes");
const mongoose = require("mongoose")
const cors = require("cors")


const app = express();

mongoose.connect(process.env.MONGO_DB_CONNECTION, {
  useUnifedTopology: true,
  useNewUrlParse: true
});


app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

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

app.use(routes);
app.use((error, request, response, next ) => {
  if(error.joi){
    return response
      .status(400)
      .json({
        error: error.joi.message
      });
  }

  return response.status(500).send(error);
})

module.exports = app;
