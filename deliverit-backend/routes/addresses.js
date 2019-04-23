const express = require("express");
const router = express.Router();
const db = require("../database/database");
const queries = require("../database/queries");
const UserAddress = require("../models/UserAddressModel");

/* GET user details and the array of addresses from address table */
router.post("/", function(req, res, next) {
  let newAddress = new UserAddress(req.body.email, req.body.newAddress);

  async function updateAddressQuery() {
    let query = await db.runQuery(queries.updateAddress(newAddress));
  }

  updateAddressQuery().then(status => {
    console.log("Updation:", status);
  });
});

module.exports = router;
