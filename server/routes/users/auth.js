const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log("logged in");
});

router.post("/logout", (req, res) => {
  console.log("logged out");
});

router.post("/register", (req, res) => {
  console.log("user registered");
});

module.exports = router;
