const express = require("express");
const router = express.Router();
const db = require("../models/database");
const queries = require("../models/queries");

/* GET users listing. */
router.get("/", function(req, res, next) {
  console.log(req.query.email);
  async function queryCall() {
    query = await db.runQuery(queries.getUserInfo(req.query.email));
    return query;
  }
  queryCall().then(result => {
    console.log(result);
    res.send(result[0]);
  });
});

/* Stores a new user data in the database */
router.post("/", function(req, res, next) {
  console.log(req.body);
  let query;
  async function queryCall() {
    query = await db.runQuery(
      queries.newUser(
        req.body.email,
        req.body.fullName,
        req.body.clientId,
        req.body.phoneNum
      )
    );
    return query;
  }

  queryCall().then(status => {
    console.log(status);
  });
});

module.exports = router;
