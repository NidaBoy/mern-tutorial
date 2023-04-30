const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: string,
        required: true,
    },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;