console.log("basic http server");

var request = require('request');
var http = require('http');

request('http://www.bing123asdasdf.com', function(err, res, body) {
    if(!err && res.statusCode == 200) {
        console.log(body);
    }
    if(err) {
        console.log(err);
    }
});

/*var http = require('http');
var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect().use(function(req,res) {
                        /*var parsedInfo = {};

                        parsedInfo.firstName = req.body.userFirstName;

                        res.end("Parsed from form " + parsedInfo.firstName);*/

                        /*if(req.url == "/hello") {
                            console.log("plain data");
                            res.end("hello");
                        }
                        if(req.url == "/hello.json") {
                            var data = "hello";
                            var jsonData = JSON.stringify(data);
                            res.setHeader('Content-Type','application/json');
                            res.end(jsonData);
                        }
                        if(req.url == "/end") {
                            console.log("err");
                            res.statusCode = 404;
                            res.end("Not found");
                        }
                    });

http.createServer(app).listen(3457);
console.log("listening");*/