var express = require('express');
var router = express.Router();

const tokenRouter = require("./token");

router.get("/", (req, res) => {
    res.send("Welcome to the ExpressJS!");
});
router.use(tokenRouter);

module.exports = router;
