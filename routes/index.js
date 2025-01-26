var express = require('express');
var router = express.Router();

const tokenRouter = require("./token");

router.use(tokenRouter);

module.exports = router;
