var http = require('http');// la lib du serveur
var url = require('url');// la lib pour g�rer l'url
var querystring = require('querystring'); // la lib pour g�rer les param�tres de l'url
//Matthieu BIG BIG NOOB 
var port = process.env.port || 8080;


var server = http.createServer();

server.on('request',function(req, res) {
    //Pour r�cup�rer l'url enti�re
    var path = url.parse(req.url).query;
    //Pour r�cup�rer les param�tres dans un tableau
    var params = querystring.parse(path);
    res.writeHead(200, {"Content-Type": "text/plain"});

    // on v�rifie si noob existe dans le tableau
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
