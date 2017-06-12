var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ukidb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { name: 'Mayoori', address: 'Velanai'},
    { name: 'Thadchayini', address: 'Nelliady'},
    { name: 'Keerththana', address: 'Vavuniya'},
    { name: 'Thuvaragan', address: 'Jaffna'},
    { name: 'Sangeeran', address: 'Chavakacheri'},
    { name: 'Minerva', address: 'Jaffna'},
    { name: 'Shahama', address: 'Puttalam'},
    { name: 'Abiramy', address: 'Sulipuram'},
    { name: 'Janusha', address: 'Elalai'},
    { name: 'Janarthanan', address: 'Velanai'},
    { name: 'Thaneeshan', address: 'Velanai'},
    { name: 'Ramana', address: 'Nelliady'},
    { name: 'Darshan', address: 'Valvettithurai'},
    { name: 'Jackshan', address: 'Trincomale'}
    { name: 'Dilani', address: 'Karainagar'}
  ];
  db.collection("ukistudents").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
