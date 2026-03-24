const express = require("express");
const blogController = require("../controllers/blog");

const router = express.Router();

router.get("/health", blogController.APIHealth);

module.exports = router;