var fs = require('fs')
var videos = []
 fs.readdir('/mnt/videos', function(err , contents){
    videos = contents;
});



