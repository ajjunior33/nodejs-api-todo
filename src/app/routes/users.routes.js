const {
  Router
} = require("express");

const {
  celebrate,
  Segments,
  Joi
} = require('celebrate');

const UserController = require("../controllers/UserController");

const UsersRoutes = Router();

UsersRoutes
  .post("/", celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().messages({
          "any.required": "O campo {#label} é obrigatório.",
        }),
        name: Joi.string().required().messages({
          "any.required": "O campo {$label} é obrigatório."
        }),
        password: Joi.string().required().messages({
          "any.required": "O campo {$label} é obrigatório."
        }),
      }),
    }),
    UserController.store
  );

module.exports = UsersRoutes;
