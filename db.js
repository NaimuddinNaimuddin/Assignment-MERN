const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/users-crud');
    } catch (err) {
        console.log('DB Connection Err')
    }
}

connect()