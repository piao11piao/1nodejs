var fs = require('fs');
fs.open('mynewfile2.txt','w',function(err,file){
    if (err) throw err;
    console.log('save new file');
});
fs.writeFile('mynewfile2.txt','wirte something in file ...', function(err){
    if (err) throw err;
    console.log("write in new file");
});
fs.unlink('mynewfile2.txt',function(err){
    if (err) throw err;
    console.log("delete file");
});