const User = require("../models/User");
const {
  generateToken
} = require('../utils/generateToken');

module.exports = {
  async store(request, response) {
    try {
      const {
        name,
        email,
        password
      } = request.body;

      const findUserByEmail = await User.findOne({
        email
      });

      if (findUserByEmail) {
        return response.status(400).json({
          message: "E-mail already registered",
          status: false
        });
      }

      const user = await User.create({
        name,
        email,
        password
      });


      return response.status(200).json({
        message: "User registered successfully",
        status: true,
        user,
        token: generateToken({
          id: user.id
        })
      });
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        error: "Não foi possível criar a conta do usuário"
      });
    }
  }
}
