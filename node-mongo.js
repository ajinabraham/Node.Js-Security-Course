

var express = require('express');
var app = express();
app.get('/', function(req, res) {
  var resp=req.query.data
  var MongoClient = require('mongodb').MongoClient;
	MongoClient.connect("mongodb://192.168.0.7:27017/logins", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var collection = db.collection('logins');
  	var doc1 = {data: resp};
  	collection.insert(doc1);
  	console.log("Data Inserted.")
  }
  
  res.send('Inserted Data: '+resp);
});
});

app.get('/get', function(req, res) {
  var resp=req.query.data
  var MongoClient = require('mongodb').MongoClient;
	MongoClient.connect("mongodb://192.168.0.7:27017/logins", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var collection = db.collection('logins');
   collection.findOne({userid:resp}, function(err, item) {
   	var d=JSON.stringify(item)
   	 console.log("Data Read: " + d)
   	 res.send('Retrived Data: '+d+' for Input '+resp);	
   });
  
  }
  
  
});
});

app.listen(8000);



  /*
  

   var collection = db.collection('logins');
  var docs = [{mykey:1}, {mykey:2}, {mykey:3}];

    collection.find().toArray(function(err, items) {});

    var stream = collection.find({mykey:{$ne:2}}).stream();
    stream.on("data", function(item) {});
    stream.on("end", function() {});

    collection.findOne({mykey:1}, function(err, item) {});

});
*/