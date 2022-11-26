const {Todo} = require("../model/model");

const todoController = {
  //[GET] all data
  getAllData: (req, res, next) => {
    Todo.find({})
      .then((todo) => {
        res.json(todo);
      })
      .catch((error) => next(error));
  },
  //[Post] delete item
  deleteItem: async (req, res, next) => {
    const model = await Todo.findOne({ "data._id": req.params.id })
      .then((item) => {
        return item;
      })
      .catch((error) => next(error));
    model.data.splice(req.body.index, 1);
    if (model.data.length === 0) {
      res.json({ message: "delete item succes" });
      model.remove();
      return;
    }
    res.json(model);
    model.save();
  },
  //[POST] creat new todo
  creatNewToDo: (req, res, next) => {
    if (res.status(200)) {
      const item = new Todo(req.body);
      item.save();
    }
    res.status(200).json(req.body);
  },
  //[POST] update new todo
  updateNewToDo: async (req, res, next) => {
    const model = await Todo.findById({ _id: req.params.id }).then(
      (item) => {
        res.json(item.data);
        return item;
      }
    );
    model.data.push(req.body);
    await model.save();
  },
  //[GET] item edit
  getItemEdit: async (req, res, next) => {
    try {
      const result = await Todo.findOne({ "data._id": req.query.id });
      const test = result.data.find((item) => {
        if (item._id.toString() === req.query.id) {
          return item;
        }
      });
      res.json(test);
    } catch (error) {
      res.json("fail to edit item");
    }
  },
  //[PUT] edit todo
  editToDo: async (req, res, next) => {
    try {
      const model = await Todo.findOne({ "data._id": req.params.id }).then(
        (item) => {
          return item;
        }
      );
      model.data[req.body.index] = req.body.data;
      res.json(model.data[req.body.index]);
      await model.save();
    } catch (error) {
      res.json("fail to edit item");
    }
  },
  searchToDo: (req, res, next) => {
    Todo.findOne({ "data._id": req.query.id }).then((item) =>
      res.json(item)
    );
  },
};

module.exports = todoController;
