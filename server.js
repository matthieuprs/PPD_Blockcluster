var http = require('http');// la lib du serveur
var url = require('url');// la lib pour gérer l'url
var querystring = require('querystring'); // la lib pour gérer les paramètres de l'url
//Matthieu BIG BIG NOOB 
var port = process.env.port || 8080;


var server = http.createServer();

server.on('request',function(req, res) {
    //Pour récupérer l'url entière
    var path = url.parse(req.url).query;
    //Pour récupérer les paramètres dans un tableau
    var params = querystring.parse(path);
    res.writeHead(200, {"Content-Type": "text/plain"});

    // on vérifie si noob existe dans le tableau
    if ('noob' in params){
        res.write('Devinez qui est nul ... c\'est : ' + params['noob']);
    }
    else {
        res.write('quoi personne n\'est nul ?');
    }
    res.write('\n' + path);
    res.end();
});

server.listen(port);
