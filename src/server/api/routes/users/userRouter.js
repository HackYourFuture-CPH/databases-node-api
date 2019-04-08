'use strict';

const sql = require('./../../../db');
// router setup
const express = require('express');
const router = express.Router({ mergeParams: true });

// ENDPOINT: /api/users/ :GET
router.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  sql.query("SELECT * FROM `lesson2`.user;", function(err, result) {
    if (err) {
      console.error("error: ", err);
      res.status(500);
      res.end(JSON.stringify({
        message:"A SQL error occurred.",
        error: err.sqlMessage
      }));
    } else {
      res.end(JSON.stringify(result));
    }
  });
});

// ENDPOINT: /api/users/ :POST
router.post('/', (req, res, next) => {

});

// ENDPOINT: /api/users/ :PATCH
router.patch('/', (req, res, next) => {

});


module.exports = router;
