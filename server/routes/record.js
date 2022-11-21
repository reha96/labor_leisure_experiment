const express = require("express");
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("experiment");
  db_connect
    .collection("participant_info")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("participant_info")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    treatment: req.body.treatment,
    lottery: req.body.lottery,
    timeStart: req.body.timeStart,
    platform: req.body.platform,
    browser: req.body.browser,
    ID: req.body.ProlificId,
    attention1: req.body.attention1,
    attention2: req.body.attention2,
    clikcedOkToSwitch: req.body.clikcedOkToSwitch,
    timeChoice: req.body.timeChoice,
    leisureTime: req.body.leisureTime,
    laborTime: req.body.laborTime,
    transcription: req.body.transcription,
  };
  //  console.log(data)
  console.log(myobj);

  db_connect
    .collection("participant_info")
    .insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      attention1: req.body.attention1,
      attention2: req.body.attention2,
      clikcedOkToSwitch: req.body.clikcedOkToSwitch,
      timeChoice: req.body.timeChoice,
      leisureTime: req.body.leisureTime,
      laborTime: req.body.laborTime,
      transcription: req.body.transcription,
    },
  };
  db_connect
    .collection("participant_info")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("participant_info")
    .deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
});

module.exports = recordRoutes;
