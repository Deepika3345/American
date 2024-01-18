const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please enter name"],
    },
    email: {
        type: String,
        require: [true, "please enter email"],
        unique: true,

    },
    password: {
        type: String,
        require: [true, "please enter password"],
    },
    isadmin: {
        type: Boolean,
        require: true,
        default: false,
    },
}, {
    timestamps: true

})

module.exports = mongoose.model("auths", authSchema)