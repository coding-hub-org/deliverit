const express = require("express");
const router = express.Router();
const db = require("../database/database");
const queries = require("../database/queries");
const User = require("../models/UserModel");

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
  let newUser = new User(
    req.body.fullName,
    req.body.email,
    req.body.clientId,
    req.body.phoneNum
  );

  async function queryCall() {
    let query = await db.runQuery(queries.newUser(newUser));
    return query;
  }

  queryCall().then(status => {
    console.log(status);
  });
});

module.exports = router;
