const express = require("express");
const { connectDB } = require("../config/ConnectDB");
const { errorHandler } = require("./middleware/Errorhandler");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
var cors = require("cors")


connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
//cartrouter
// app.use("/api/cart", require("./router/"))

//productrouter
app.use("/api/product", require("./router/Productrouter"))

//authrouter
app.use("/api/auth", require("./router/Authrouter"))

//errorhandler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
})
