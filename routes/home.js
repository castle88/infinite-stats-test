const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");

router.get("/:id", homeController.getProfile);

module.exports = router;
