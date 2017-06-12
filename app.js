var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.get('/',function(req, res){
	res.send('welcome to library service');
});

app.get('/library', function(req,res){
	console.log('server it hit');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
	res.json("{\"data\": [{\"id\": 1, \"name\": \"server physics\"},{\"id\": 2, \"name\": \"server Chemistry\"}]}");
});

var server = app.listen('8000', function(){
	console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
