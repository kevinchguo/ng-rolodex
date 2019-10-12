const express = require("express");
const router = express.Router();

router.get("/contacts?user=:id", (req, res) => {
  res.json({ Message: "Contacts for logged in user" });
});

router.get("/contacts/search/:term?user=:id", (req, res) => {
  res.json({ Message: "search user id" });
});

router.post("/contacts", (req, res) => {
  console.log("Post new contact");
});

router.get("/contacts/:id", (req, res) => {
  res.json({ Message: "Show contact_id" });
});

router.put("/contacts/:id", (req, res) => {
  console.log("Update contact");
});

router.delete("/contacts/:id", (req, res) => {
  console.log("Contact deleted");
});

module.exports = router;
