const http = require('http');
var url= require('url');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 8888;
const server= http.createServer(function(request, respond){
    // fs.readFile('demo1.html', function(err, data){
        // respond.writeHead(200, {'Content-Type': 'text/html'});
        // respond.write(request.url);
        // respond.write(data);
        // return respond.end();
    // });
    //respond.write('HELLO 111' + new Date());
    //respond.writeHead('200',{'Content-Type': 'text/plain'});
    //respond.end();
    // respond.writeHead(200 ,{'Content-Type':'text/html'})
    // var q = url.parse(request.url, true).query;
    // var text = q.year + " "+ q.month
    // respond.end(text);
    var url_text=url.parse(request.url,true);
    var file="."+url_text.pathname;
    fs.readFile(file, function(err,data){
        if (err) {
            respond.writeHead(404, {'Content-Type': 'text/html'});
            return respond.end("404 Not Found");
          } 
        respond.writeHead(200, {'Content-Type': 'text/html'});
        respond.write(data);
        return respond.end();
    })
}).listen (port);
