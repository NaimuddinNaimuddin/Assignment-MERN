const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    image: String,
    mobile: Number,
});

module.exports = mongoose.model('users', userSchema);
