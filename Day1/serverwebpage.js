var http=require("http");
var fs=require("fs");

var createserver=function(request,response){
    //tells browser that it is html content
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>HEllo</h1>');
    response.end();
}


var server=http.createServer(createserver);
server.listen(8080);