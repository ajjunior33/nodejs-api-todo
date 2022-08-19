const { Router } = require("express");

const TodoRoutes = require("./todo.routes");
const AuthRoutes = require("./auth.routes");

const routes = Router();

routes
  .use("/session", AuthRoutes)
  .use("/todo", TodoRoutes);

module.exports = routes;
