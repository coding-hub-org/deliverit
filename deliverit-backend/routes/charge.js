const stripe = require("stripe")("sk_test_JYZswB5ceRmXyMneQ0ZLVmbF00g0GoZ3G4");
const express = require('express');
const router = express.Router();

router.post("/", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
});

module.exports = router;
