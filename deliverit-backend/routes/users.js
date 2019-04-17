const express = require("express");
const router = express.Router();
const db = require("../database/database");
const queries = require("../database/queries");
const User = require("../models/UserModel");
const UserAddress = require("../models/UserAddressModel");

/* GET user details and the array of addresses from address table */
router.get("/", function(req, res, next) {
  async function getUserDetails() {
    query = await db.runQuery(queries.getUserInfo(req.query.email));
    return query;
  }

  async function getAddress() {
    query = await db.runQuery(queries.getUserAddresses(req.query.email));
    return query;
  }

  getUserDetails().then(result => {
    getAddress().then(addresses => {
      result[0].addresses = addresses;
      res.send(result[0]);
    });
  });
});

/* Stores a new user data in the database */
router.post("/", function(req, res, next) {
  console.log("req body", req.body);
  let newUser = new User(req.body.fullName, req.body.email, req.body.phoneNum);
  let newAddress = new UserAddress(req.body.email, req.body.address);

  async function createUserQuery() {
    let query = await db.runQuery(queries.newUser(newUser));
    return query;
  }

  async function createAddressQuery() {
    let query = await db.runQuery(queries.newAddress(newAddress));
  }

  createUserQuery().then(status => {
    console.log("User creation status:", status);
    createAddressQuery().then(status => {
      console.log("Address creation status:", status);
    });
  });
});

module.exports = router;
