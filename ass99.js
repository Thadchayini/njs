
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/students";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { maths_marks:{$gt:50},english_marks:{$gt:50},science_marks:{$gt:50}};
  db.collection("studentmarks").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
