const express = require("express");
const router = express.Router();

router.get("/product", (req, res, next) => {
  res.send("Get all items in a list here");
});

router.post("/product", (req, res, next) => {
  res.send("Post new item through this route");
});

router.put("/product/:id", (req, res, next) => {
  res.send("Update the item in this route");
});

router.delete("/product/:id", (req, res, next) => {
  res.send("Delete the item in this route");
});

module.exports = router;
