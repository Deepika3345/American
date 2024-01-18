const express = require("express");
const { getproduct, createproduct, updateproduct, singleproduct, deleteproduct } = require("../controller/Productcontroller");
const router = express.Router();

router.get("/", getproduct)
router.post("/", createproduct)
router.put("/:id",updateproduct)
router.get("/:id",singleproduct)
router.delete("/:id",deleteproduct)
module.exports = router