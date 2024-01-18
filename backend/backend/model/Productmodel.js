const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    img: {
        type: String,
        required: [true, "please select img"],
    },
    product: {
        type: String,
        required: [true, "please select product"],
    },
    description: {
        type: String,
        required: [true, "Please Describe your issue "]
    },
    price: {
        type: Number,
        required: [true, "Please Describe your issue "]

    },
    quantity: {
        type: Number,
        required: [true, "Please Describe your issue "],
        default: 0,

    },
    size: {
        type: String,
        required: [true, "please select size"],
        // enums: ["small", "large", "medium"]

    },
    varient: {
        type: String,
        required: true,
        // enums: ["new", "best", "popular"]

    },
    color: {
        type: String,
        required: true,
        // enums: ["red", "green", "blue"]

    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("products", productSchema)