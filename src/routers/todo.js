const express = require("express");
const router = express.Router();

const todoController = require("../controller/todoController")

router.put("/todolist/edit/:id", todoController.editToDo);
router.get("/todolist/edit", todoController.getItemEdit);
router.post("/todolist/add/:id", todoController.updateNewToDo)
router.post("/todolist/add", todoController.creatNewToDo)
router.post("/todolist/:id", todoController.deleteItem);
router.get("/todolist/search", todoController.searchToDo);
router.get("/todolist", todoController.getAllData);

module.exports = router