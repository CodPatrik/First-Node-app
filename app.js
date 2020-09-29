// Det är bara på en plats i koden som ni ev. behöver ändra

var http = require('http');

var fs = require('fs');

function onRequest(request,response){

    response.writeHead(200, {'Content-Type':'text/html'});
    

    // Namnet på den fil ni vill ska skickas till webbläsaren
    // Finns i raden som ser ut så här nedan.

    // fs.readFile('./index.html',null,function(error, data){

    // filen som skickas heter index.html och finns i samma
    // bibliotek som app.js

    fs.readFile('./index.html',null,function(error, data){

    if (error) {
        response.writeHead(404);
        response.write('File not found!');
    } else {
        response.write(data);
    }
   
    response.end();
    });

}

http.createServer(onRequest).listen(8000); // Startar server

console.log("server running at port 8000"); // visar i konsoll att server är startad.