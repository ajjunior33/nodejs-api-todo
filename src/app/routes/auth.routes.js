const {
  Router
} = require("express");
const {
  celebrate,
  Segments,
  Joi
} = require('celebrate');

const AuthController = require("../controllers/AuthController");
const authConfig = require("../middleware/authConfig");

const AuthRoutes = Router();

route.post("/", celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().messages({
          "any.required": "O campo {#label} é obrigatório.",
        }),
        password: Joi.string.required().messages({
          "any.required": "O campo {$label} é obrigatório."
        }),
      }),
    }),
    AuthController.auth
  ),

  module.exports = AuthRoutes;
