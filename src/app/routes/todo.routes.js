const {Router} = require("express");
const TodoController = require("../controllers/TodoController");

const TodoRoutes = Router();

TodoRoutes
  .get("/", TodoController.index)
  .get("/:id", TodoController.show)
  .post("/", TodoController.store)
  .put("/:id", TodoController.update)
  .delete("/:id", TodoController.destroy);

module.exports = TodoRoutes;
