var express = require('express')
var fs = require('fs')
var app = express()
var path = require('path');
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
var spawn = require('child_process').spawn


// veiw engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', function (req, res) {
  res.render('index', { title: 'Pi - Tv' });
});
app.get('/videos', function(req, res){
    fs.readdir('/mnt/videos/' , function(err, contents ){
        if (err){
            throw err
        }
        contents.splice(0,2) 
        res.render( 'videos', { title: 'Videos', videos: contents})
    });
}); 

app.listen(3000)
console.log('listening on port 3000')
