const mongoose = require("mongoose")

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/TodoApp');
        console.log("connected database succesfully")
    } catch (error) {
        console.log(error, "connect database false")
    }
}

module.exports = {connect}
