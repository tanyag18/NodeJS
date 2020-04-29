const fs=require('fs')

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

