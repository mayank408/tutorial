var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('A user connected');

  //Send a message after a timeout of 4seconds
  setTimeout(function(){
    socket.send('Sent a message 4seconds after connection!');
  }, 4000);
  socket.on('chat message',function(data){
    console.log(data);
  });
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });
  socket.emit('Hello','Hello from the Server');
});
app.listen(3055, function(){
  console.log('listening on *:6000');
});


