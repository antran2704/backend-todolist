const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

// add slug
mongoose.plugin(slug);

const TodoModel = new Schema(
  {
    date: { type: String },
    data: [
      {
        nameTodo: { type: String, require: true },
        type: { type: String },
        value: { type: String },
        slug: { type: String, slug: "nameTodo" },
      },
    ],
  },
  { timestamps: true }
);

const UserModel = new Schema({
  name: { type: String, require: true },
  password: { type: String, require: true },
});

const Todo = mongoose.model("todo", TodoModel);
const User = mongoose.model("user", UserModel);

module.exports = { Todo, User };
