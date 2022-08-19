const bcrypt = require("bcryptjs");
const User = require("../models/User")
const {
  generateToken
} = require("../utils/generateToken");

module.exports = {
  async auth(request, response) {
    const {
      email,
      password
    } = request.body;

    const user = await User.findOne({
      email
    }).select("+password");

    if (!user)
      return response.status(400).json({
        error: "Email not found",
        status: false
      });
    user.password = undefined;

    return response.status(200).json({
      message: "Successfully authenticated",
      token: generateToken({
        id: user.id
      }),
      user: user
    });
  }
}
