var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// serves files in public folder
app.use(express.static('public'));

// NB:: this must be included to get JSON content sent with requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// setup REST API /team route VERBS - GET, POST, PUT, DELETE
app.route('/team/:id?')
  .get(function (req, res) {  
    res.send(`GET /team/${req.params.id} received`);
    console.log(req.params.id);
  })
  .post(function (req, res) { // add
    // res.send(`POST /team received`);
    res.send(`POST /team {${req.body.id}, ${req.body.name}} received`);
    console.log(req.body);
  })
  .put(function (req, res) { // edit
    res.send(`PUT /team/${req.params.id} {${req.body.id}, ${req.body.name}} received`);
    console.log(req.body);
  })
  .delete(function (req, res) { // delete
    res.send(`DELETE /team/${req.params.id} received`);
    console.log(req.params.id);
  });  


var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
