var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { Song_Name: 'Chillena oru malaithuli', Film: 'Raja Rani' , Music_Director:' G.V.Prakash Kumar' , Male_Singer:'Clinton Cerejo, Alphonse' , Female_Singer:'Alka' };
  db.collection("songdetails").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
