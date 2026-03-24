const express = require("express");
const blogController = require("../controllers/blog");

const router = express.Router();

router.get("/health", blogController.APIHealth);
router.get("/blogs", blogController.getBlog);

module.exports = router;