const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog.controller");

router.get("/blogs", blogController.getBlogs);
router.get("/blogs2", blogController.getBlogs2);
router.get("/blogs3", blogController.getBlogs3);
router.get("/blogs4", blogController.getBlogs4);
router.get("/blogs5", blogController.getBlogs5);

module.exports = router;