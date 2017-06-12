var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { english_marks: };
  var newvalues = {$set: {science_marks} };
  db.collection("customers").update(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " record updated");
    db.close();
  });
});
