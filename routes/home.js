const express = require("express");
const router = express.Router();
const { getProfile } = require("../controller/home");

// router.get("/", getProfile);
router.get("/:id", getProfile);

module.exports = router;
