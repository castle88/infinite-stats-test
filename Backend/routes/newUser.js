const express = require("express");
const router = express.Router();
const newUserController = require("../controller/newUser");

router.get("/:id", newUserController.createProfile);

module.exports = router;
