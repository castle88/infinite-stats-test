const express = require("express");
const router = express.Router();
const { postRegister, postLogin } = require("../controller/auth");

router.post("/register", postRegister);

router.post("/login", postLogin);

module.exports = router;
