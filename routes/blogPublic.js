const express = require("express");
const router = express.Router();

const blogPublicController = require("../controllers/blogPublic.controller");

router.get("/blogs-public", blogPublicController.getBlogs);

module.exports = router;