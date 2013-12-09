var http = require('http')

//Initialize the HTTP server on port 8080, serve the index.html page
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 
        'Content-type': 'text/jade'});
        res.end(fs.readFileSync(__dirname + '/views/index.jade'));
    }).listen(8080, function() {
        console.log('Listening at: 127.0.0.1 8080');
    }
);