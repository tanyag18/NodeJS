const fs=require('fs')
var http = require('http');
const normalizePort = require('normalize-port');

const PORT =normalizePort(process.env.PORT || 8000);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! I am here through google engine');
}).listen(PORT, () => {
    console.log(`Application listening on ${PORT}`)
  });



function loadJSON(filename=''){
    if(fs.existsSync(filename)){
        return JSON.parse(fs.readFileSync(filename).toString());
    }
    else{
        return '';
    }

}

function saveJSON(filename='',json='""',)
{
    fs.writeFile(filename,JSON.stringify(json,null,2), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Data saved successfully!");
});
}

const data=loadJSON('data.json') // read previous file and push new data into file

data.push({id:123,name:'Tanya'}) // Add data

saveJSON('data.json',data); 

