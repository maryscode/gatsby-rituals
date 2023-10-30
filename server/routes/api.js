/* eslint-disable require-jsdoc */

// Check for .env file in development
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config.configPath = "./.env";
  const result = dotenv.config();
  if (result.error) {
    throw result.error;
  }
}

const express = require("express");
const mysql = require('mysql');
const config = require('../config/database');
const getDateAndTime = require("../utils");
const fs = require('fs');
const router = express.Router();

router.post("/unsubscribe", function(req, res) {
  const email = req.body.email;
  console.log(`POST /unsubscribe, email = ${email}`);

  // req.body.topics is an array of strings, convert to a string and use | as delimiter
  const topics = req.body.topics ? req.body.topics.join('|') : '';
  const dateTime = getDateAndTime();

  // handle SFMC unsubscribe API
  
  // temporarily save to unsubscribe database
  let sql = `INSERT INTO unsubscribe (emailAddress, UnsubscribeReason, updatedDate, BrensoConsent)
    VALUES ('${req.body.email}', '${topics}', '${dateTime}', 'true');
    `;

  // execute the insert statment
  const connection = mysql.createConnection(config);
  connection.query(sql, function (error, results, fields) {
    if (error) {
      // console.log(`error in mysql query: ${error}`);
      res.send({ 
        success: false,
        message: `error in mysql unsubscribe query: ${error}`
      });
      try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
      return false;
    } else {
      // console.log(`results: ${results}`);
      res.send({ 
        success: true,
        message: `inserted new unsubscribe record for ${email}`
      });
      try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
    }
  });
});

// READ signups
router.get("/unsubscribe", function (req, res) {
  console.log(`GET /unsubscribe`);

  let sql = `SELECT * FROM brenso_hcp_stage.unsubscribe`; 
  let connection = mysql.createConnection(config);
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.send({
        success: false,
        message: `${error.message}`
      })
      try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
      return console.error(error.message);
    } else {
      res.send({
        success: true,
        message: `get all signups`,
        data: `${JSON.stringify(results)}`
      })
      try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
    }    
  });

  connection.end(); 
});

async function getLastSignupId(connection) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT id FROM signups ORDER BY id DESC LIMIT 1';
    connection.query(query, function (error, results, fields) {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          const lastId = results[0].id;
          resolve(lastId);
        } else {
          resolve("0"); // or resolve an appropriate default value
        }
      }
    });
  });
}

router.post("/signup", function(req, res) {
  console.log(`POST /signup`);

  const connection = mysql.createConnection(config);

  // Call the asynchronous function and console log the result
  getLastSignupId(connection).then((lastSignupId) => {
    // console.log('The id of the last entry in the signups table is: ', lastSignupId);
    const firstName = req.body.first;
    
    console.log(`req.body = ${JSON.stringify(req.body)}`)
    const dateTime = getDateAndTime();
    
    // if specialty is Other and we have a value for specify-specialty, use that value
    const specialty = (req.body.specialty === 'Other' && req.body.specify_specialty) ? req.body.specify_specialty : req.body.specialty;

    // req.body.topics is an array of strings, convert to a string and use | as delimiter
    const topics = req.body.topics ? req.body.topics.join('|') : '';
    
    let sql = `INSERT INTO signups (SourceID, Source_System, First_Name, Last_Name, Email, Specialty, Address_Line_1, Address_Line_2, City, State, Zip, SubmittedDate, SurveyAnswer)
    VALUES ('${10000000 + lastSignupId}', 'be_web_regn', '${req.body.first}', '${req.body.last}', '${req.body.email}', '${specialty}', '${req.body.address_1}', '${req.body.address_2}', '${req.body.city}', '${req.body.state}', '${req.body.zipcode}', ${dateTime}, '${topics}');
    `;

    // execute the insert statment
    connection.query(sql, function (error, results, fields) {
      if (error) {
        // console.log(`error in mysql query: ${error}`);
        res.send({ 
          success: false,
          message: `error in mysql query: ${error}`
        });
        try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
        return false;
      } else {
        // console.log(`results: ${results}`);
        res.send({ 
          success: true,
          message: `inserted new record for ${firstName}`
        });
        try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
      }
    });
  }).catch((error) => {
    console.error(error);
    res.send({ 
      success: false,
      message: `getLastSignupId error: ${error}`
    });
  }).finally(() => {
    // Close the connection to the database
    connection.end();
  });

});

// READ signups
router.get("/signups", function (req, res) {
  console.log(`GET /signups`);

  let connection = mysql.createConnection(config);

  let sql = `SELECT * FROM brenso_hcp_stage.signups`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.send({
        success: false,
        message: `${error.message}`
      })
      try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
      return console.error(error.message);
    } else {
      res.send({
        success: true,
        message: `get all signups`,
        data: `${JSON.stringify(results)}`
      })
      try {connection.end();} catch (error) {console.log(`error closing connection: ${error}`)}
    }
  });

});

module.exports = router;