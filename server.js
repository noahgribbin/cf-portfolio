var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('./'));

app.get('*', function(req, res){
  console.log("New request:", req.url);
  res.sendFile('index.html', {root: '.'});
});

app.listen(port,function(){
  console.log('Server started on port ' + port + '!');
})
