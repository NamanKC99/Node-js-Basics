//npm init - it wil create configuration file - 
//npm init -y command se ask no question~


//file system
//create file
const fs = require('fs');
fs.writeFile("hey.txt","hey hello file bana gai",function(err){
    if(err) console.log(err);
    else console.log("done");
})

//add text in file
fs.appendFile("hey.txt","hey hello file bana gai",function(err){
    if(err) console.log(err);
    else console.log("done");
})

//rename file
fs.rename("hey.txt","change.txt",function(err){
    if(err) console.log(err);
    else console.log("done");
})


//copy file

fs.copyFile('change.txt', 'destination.txt', (err) => {
    if (err) throw err.message;
    console.log('source.txt was copied to destination.txt');
  });


//delete file
fs.unlink("destination.txt",function(err){
    if(err) console.log(err);
    else console.log("done");
})

//delete empty file

//create folder
fs.mkdir("destination.txt",function(err){
    if(err) console.log(err);
    else console.log("done");
})

//read folder



