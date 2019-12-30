//module for creating server
var http=require("http");

//function for creating server
var createserverfunction=function(request,response)
{
    response.write("Hello World");
    response.end();
}

//module function to create server
var server=http.createServer(createserverfunction);
//when browser access this port address, then response in given 
server.listen(8080);