const express = require("express");
const { authLogin, singUp } = require("../controllers/authController");

const router = express.Router();

router.post("/login", authLogin);
router.post("/sing-up", singUp);

module.exports = router;
