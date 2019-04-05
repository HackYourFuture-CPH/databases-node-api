'use strict';

const sql = require('./../../../db');
// router setup
const express = require('express');
const router = express.Router({ mergeParams: true });

// ENDPOINT: /api/users/ :GET
router.get('/', (req, res, next) => {
    sql.query("SELECT * FROM `final-project`.users;", function (err, result) {             
        if(err) {
            console.log("error: ", err);
        }
        else{
            res.setHeader('Content-Type', 'application/json');
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
