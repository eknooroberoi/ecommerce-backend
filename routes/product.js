//routes

const express = require("express");
const router = express.Router();

//create= to create new category
const { create, productById, read } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read)
router.post("/product/create/:userId", requireSignin, isAdmin, isAuth , create);
router.param("userId", userById);
router.param("productId", productById);

module.exports= router;