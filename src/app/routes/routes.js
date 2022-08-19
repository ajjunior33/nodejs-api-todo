const { Router } = require("express");

const UsersRoutes = require('./users.routes');
const TodoRoutes = require("./todo.routes");
const AuthRoutes = require("./auth.routes");

const routes = Router();

routes
  .use("/user", UsersRoutes)
  .use("/session", AuthRoutes)
  .use("/todo", TodoRoutes);

module.exports = routes;
