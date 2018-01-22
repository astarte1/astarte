var http = require('http');
var fs = require('fs');
//var div = document.getElementsByTagName('div')[0];
console.log('div');
var Event = require('events').EventEmitter;
var obj = new Object();

var app = http.createServer(function foo(req,res){
	if(req.url==='/about'){
		console.log(req);
		res.end();
	}else if(req.url==='/stop'){
		serv.close();
		res.end();
		serv.emit('close');
	}else if(req.url==='/contact'){
		fs.readFile('index.html',function(err, contents){
			console.log(contents);
			res.end();
		})
	}else res.end();
});
app.listen(3000,function(){
	console.log('Go to localhost 3000');
})
