var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/uki";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { name: 'Darshan', address: 'Valvettithural'},
    { name: 'Ramanakarasarma', address: 'Nelliady'},
    { name: 'Thaneeshan', address: 'Velanai'},
    { name: 'Abirami', address: 'Sulipuram'},
    { name: 'Janusha', address: 'Elalai'},
    { name: 'Shahama', address: 'Puttalam'},
    { name: 'Minerva', address: 'Jaffna'},
    { name: 'Dilani', address: 'Karainagar'},
    { name: 'Jackshanan', address: 'Trincomale'},
    { name: 'Thuvaragan', address: 'Jaffna'},
    { name: 'Shangeeran', address: 'Chavakacheri'},
    { name: 'Mayoori', address: 'Velanai'},
    { name: 'Keerththana', address: 'Vavuniya'},
    { name: 'Thadchayini', address: 'Nelliady'}
    { name: 'Janarthanan', address: 'Velanai'}

  ];
  db.collection("customers").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
