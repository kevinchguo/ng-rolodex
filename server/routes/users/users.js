const express = require("express");
const router = express.Router();

router.get("/profile?user=:id", (req, res) => {
  res.json({ Message: "this is profile_id" });
});

router.get("/users?user=:id", (req, res) => {
  res.json({ Message: "this is user_id" });
});

module.exports = router;
