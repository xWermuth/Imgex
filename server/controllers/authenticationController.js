const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

function jwtSignUser(user) {
  return jwt.sign(
    {
      user,
    },
    process.env.token_secret,
    {
      expiresIn: "1 weeks",
    }
  );
}

module.exports = {
  async create(req, res) {
    const { name, password } = req.body;
    try {
      const userExists = await User.findOne({ name });
      if (userExists) {
        throw new Error("USER already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, password: hashedPassword });
      user.password = undefined;
      res.send(jwtSignUser(user));
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async destroy(req, res) {
    const { id } = req.body;
    console.log(id);
    try {
      // const user = await User.findOne({ name });
      console.log("ID", id);
      await User.findByIdAndDelete(id);
      res.send({ message: "User successfully deleted" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: error.message });
    }
  },
  async login(req, res) {
    const { name, password } = req.body;
    console.log("name", name);
    try {
      const user = await User.findOne({ name }).select("+password");
      if (!user) {
        throw new Error("Name does not exist");
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        throw new Error("Password does not match");
      }
      user.password = undefined;
      const token = jwtSignUser(user);
      console.log("token", token);
      res.send({ token });
    } catch (err) {
      res.status(400).send({ error: err });
    }
  },
};
