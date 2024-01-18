const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const asynchandler = require("express-async-handler")
const Auth = require("../model/Authmodel")

const register = asynchandler(async (req, res) => {
    const { name,
        email,
        password, } = req.body

    //if details empty
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Fill all Details")
    }

    //if user already exist
    const userexist = await Auth.findOne({ email: email })
    if (userexist) {
        res.status(401)
        throw new Error("User already Exist")
    }

    //hash password 
    const salt = await bcrypt.genSalt(10);
    const hasedpassword = await bcrypt.hash(password, salt);


    const user = await Auth.create(
        {
            name,
            email,
            password: hasedpassword
        })

    if (!user) {
        res.status(401);
        throw new Error("Invalid Data")
    }

    res.status(200).json({
        // id: user._id,
        name: user.name,
        email: user.email,
        token: generatetoken(user._id)

    })

})

const login = asynchandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(401)
        throw new Error("Fill all details")
    }

    const user = await Auth.findOne({ email: email });


    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            // id: user._id,
            name: user.name,
            email: user.email,
            token: generatetoken(user._id)

        })

    }
    else {
        res.status(400)
        throw new Error("Invalid credentials")

    }


})

const generatetoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}

module.exports = { register, login }