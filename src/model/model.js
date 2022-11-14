const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator")

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
        slug: { type: String, slug: "nameTodo" }
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("todo", TodoModel);
