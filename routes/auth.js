const express = require("express");
const router = express.Router();
const { postRegister } = require("../controller/auth");

router.post("/register", postRegister);

module.exports = router;
