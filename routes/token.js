const express = require("express");
const router = express.Router();

const tokenController = require("../controllers/token.controller");

router.post("/login", tokenController.login);
router.post("/refresh-access-token", tokenController.refresh_access_token);

module.exports = router;