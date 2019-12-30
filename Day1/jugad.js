var http=require("http");
var fs=require("fs");
var content;
var createserver=function(request,response){
    
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('myfile.html',function(err,data){
        //content=data;
        response.write(data);
        response.end();//does not run outside because callback(difference of execution time) 
    })   
}

var server=http.createServer(createserver);
server.listen(8080);