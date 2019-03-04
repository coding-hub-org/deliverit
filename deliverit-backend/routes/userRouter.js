const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  res.send({ name: "test" });
});

router.post("/user", (req, res) => {
  res.send({ data: req.body });
});

router.put("/user/:id", (req, res) => {
  res.send("Add new user here");
});

router.delete("/user/:id", (req, res) => {
  res.send("Add new user here");
});

module.exports = router;
