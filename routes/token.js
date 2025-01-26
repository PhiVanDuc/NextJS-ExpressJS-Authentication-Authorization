const express = require("express");
const router = express.Router();

const tokenController = require("../controllers/token.controller");

router.post("/login", tokenController.login);

module.exports = router;