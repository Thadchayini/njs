var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/students";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { maths_marks:{$lt:40},science_marks:{$lt:40}};
  db.collection("studentmarks").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
