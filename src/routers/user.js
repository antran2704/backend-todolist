const express = require("express");
const router = express.Router();
const userController = require("../controller/userController")

router.get("/allUser", userController.getAllUser)
router.post("/login", userController.checkUser)
router.post("/addUser", userController.addUser)

module.exports = router