const mongoose = require("mongoose")

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://antran:cunyeu1506@cluster0.mflf25c.mongodb.net/?retryWrites=true&w=majority');
        console.log("connected database succesfully")
    } catch (error) {
        console.log(error, "connect database false")

    }
}

module.exports = {connect}
