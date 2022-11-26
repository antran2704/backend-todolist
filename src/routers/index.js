const todoRoute = require("./todo")
const userRoute = require("./user")

const routes = (app) => {
    app.use("/user", userRoute);
    app.use("/", todoRoute);
};

module.exports = routes