const jwt = require("jsonwebtoken");
const { User } = require("../model/model");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const data = await User.find({});
      res.json(data);
    } catch (error) {
      res.json(error, "false get all user");
    }
  },
  addUser: async (req, res) => {
    const data = { name: req.body.name, password: req.body.password };
    const model = new User(data);
    await model.save();
    res.json("add user success");
  },
  checkUser: async (req, res) => {
    try {
      const user = await User.findOne({
        name: req.body.name,
        password: req.body.password,
      });
      if (user) {
        const token = jwt.sign({ id: user._id }, "password");
        res.json(token);
      } else {
        res.json("user not exit");
      }
    } catch (error) {
      res.json("false get user");
    }
  },
};

module.exports = userController;
