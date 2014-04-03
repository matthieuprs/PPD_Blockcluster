
/*
 * GET users listing.
 */

/*exports.rExecCoClusterFromUid = function(req, res){
	var exec = require('child_process').execFile;

	var fun =function(){
	   console.log("fun() start");
	   exec("'C:\Program Files\R-3.0.2\bin\Rscript.exe'", ["C:\Users\jordan\Documents\GitHub\PPD_Blockcluster\r\blockcluster.R", "C:\Users\jordan\Documents\GitHub\PPD_Blockcluster\r\test.csv", "C:\Users\jordan\Documents\GitHub\PPD_Blockcluster\r\json.txt", "3", "2"], function(err, data) {  
			console.log(err)
			console.log(data.toString());                       
	});
	fun();
}
};*/

var terminal = require('child_process').spawn('cmd');

terminal.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

terminal.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});

setTimeout(function() {
    console.log('Sending stdin to terminal');
    terminal.stdin.write("cd \"C:\Program Files\R\R-3.0.2\bin\"\n");
    terminal.stdin.write("\"C:\Program Files\R\R-3.0.2\bin\Rscript.exe\" \"C:\Users\jordan\Documents\GitHub\PPD_Blockcluster\r\blockcluster.R\" \"C:\Users\jordan\Documents\GitHub\PPD_Blockcluster\r\test.csv\" \"C:\Users\jordan\Documents\GitHub\PPD_Blockcluster\r\json.txt\" 3 2\n");
    console.log('Ending terminal session');
    terminal.stdin.end();
}, 1000);