const express = require("express");
const router = express.Router();
const matchController = require("../controller/match");

router.get("/:id", matchController.getMatch);

module.exports = router;
