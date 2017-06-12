
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/students";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj= {Average:""};
  db.collection("studentmarks").insertOne(myobj , function(err, result) {
    if (err) throw err;
    console.log("One record inserted");
    db.close();
  });
});
