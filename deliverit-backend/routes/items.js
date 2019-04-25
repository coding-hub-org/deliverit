const express = require("express");
const router = express.Router();
const db = require("../database/database");
const queries = require("../database/queries");

/* GET user details and the array of addresses from address table */
router.get("/", function(req, res, next) {
  async function getAllItems() {
    query = await db.runQuery(queries.getItems(req.query.storeId));
    return query;
  }

  getAllItems().then(result => {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
