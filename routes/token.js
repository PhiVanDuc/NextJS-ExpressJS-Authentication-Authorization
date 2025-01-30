const express = require("express");
const router = express.Router();

const tokenController = require("../controllers/token.controller");

router.post("/sign-in", tokenController.signIn);
router.post("/refresh", tokenController.refresh);

module.exports = router;