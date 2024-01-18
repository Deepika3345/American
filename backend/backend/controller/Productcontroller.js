const asynchandler = require("express-async-handler");
const Product = require("../model/Productmodel");


const createproduct = asynchandler(async (req, res) => {
    const { img, product, description, price, size, varient, color } = req.body


    if (!img || !product || !description || !price || !size || !color || !varient) {
        res.status(400)
        throw new Error("Fill All Data")
    }

    const data = await Product.create({
        img,
        product,
        description,
        price,
        size,
        varient,
        color,

    })

    if (!data) {
        res.status(400)
        throw new Error("Can't Create data")
    }

    res.status(200).json(data);

});
const getproduct = asynchandler(async (req, res) => {


    const alldata = await Product.find();
    if (!alldata) {
        res.status(400)
        throw new Error("No data Here")
    }

    res.status(200).json(alldata)

});
const updateproduct = asynchandler(async (req, res) => {

    const productUpdate = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updateproduct) {
        res.status(400)
        throw new Error("Cannot update product")
    }
    res.status(200).json(productUpdate)





});
const deleteproduct = asynchandler(async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message: "Todo deleted"
    })




})



const singleproduct = asynchandler(async (req, res) => {
    const onlyProduct = await Product.findById(req.params.id)

    if (!onlyProduct) {
        res.status(404)
    }
    res.status(200).json(onlyProduct)
})

module.exports = { createproduct, updateproduct, deleteproduct, getproduct, singleproduct }


