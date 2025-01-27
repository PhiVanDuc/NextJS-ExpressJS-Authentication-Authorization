var express = require('express');
var router = express.Router();

const tokenRouter = require("./token");
const authMiddleware = require("../middlewares/auth.middleware");
const blogRouter = require("./blog");

router.use(tokenRouter);

router.use(authMiddleware.authentication);
router.use(blogRouter);

module.exports = router;
