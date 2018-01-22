var fs = require('fs');
var fileVar1 = 'text.txt';

fs.writeFileSync(fileVar1,'Test1');
fs.appendFileSync(fileVar1,'\n'+'Test2');

var fileRead1 = fs.readFileSync(fileVar1);

console.log(fileRead1.toString());


