var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { Song_Name: 'Thaniye Thannanthaniye', Film: 'Rhythm' , Music_Director:'A.R.Rahman' , Male_Singer:'Shankar mahadevan'},
    { Song_Name: 'Evano Oruvan', Film: 'Alai Payuthey' , Music_Director:'A.R.Rahman' , Female_Singer:'Swarnalatha'},
    { Song_Name: 'Roja Poonthottam', Film: 'Kanukkul Nilavu' , Music_Director:'Ilaiyarajah' , Male_Singer:'Unnikrishnan' , Female_Singer:'Anuradha Sriram'},
    { Song_Name: 'Vennilave Vennilave Vinnaithandi', Film: 'Minsara Kanavu' , Music_Director:'A.R.Rahman' , Male_Singer:'Hariharan' , Female_Singer:'Sadhana Sargam'},
    { Song_Name: 'Sollamal Thottu Chellum Thentral', Film: 'Dheena' , Music_Director:'Yuvan Shankar Rajah' , Male_Singer:'Hariharan' }

  ];
  db.collection("songdetails").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
