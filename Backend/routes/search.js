const express = require("express");
const router = express.Router();
const searchController = require("../controller/search");

router.get("/:id", searchController.getPlayer);

module.exports = router;
