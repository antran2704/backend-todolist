const todoRoute = require("./todo")

const routes = (app) => {
    app.use("/", todoRoute);
};

module.exports = routes