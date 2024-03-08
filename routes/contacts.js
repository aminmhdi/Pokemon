const express = require("express");
const router = express.Router();

// GET    api/contacts
router.get("/", (req, res) => {
  res.send("get all contacts");
});

// POST    api/contacts
router.post("/", (req, res) => {
  res.send("add contact");
});

// PUT    api/contacts/:id
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// DELETE    api/contacts/:id
router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
