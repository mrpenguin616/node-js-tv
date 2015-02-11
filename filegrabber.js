var fs = require('fs');
var pathToFolder = '/mnt/videos'
var path = require('path')

function errorHandler(err){
    if(err){
        console.log(err)    
    }
}

fs.readdir(pathToFolder , function(err, files){
	errorHandler(err)
    // removes 2 elements that will never be used 
    files.splice(0, 2)
    files.forEach(function(element, index, array){
       fs.stat(pathToFolder + '/' + element, function(err2, stats){
            errorHandler(err2)
            console.log(stats.isDirectory())
        })  
    })
})

