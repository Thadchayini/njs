var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/students";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { name:'Ram'};
  var newvalues = {$unset: {science_marks:""} };
  db.collection("studentmarks").update(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " record updated");
    db.close();
  });
});
