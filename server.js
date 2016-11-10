var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

var proxyGithub = function(req, res){
  console.log('Routing Github for ', req.params[0]);
  (requestProxy({
    url:'https://api.github.com/' + req.params[0],
    headers:{'Authorization': 'token ' + process.env.GITHUB_TOKEN}
  }))(req, res);
};

app.get('/github/*', proxyGithub);

app.use(express.static('./'));

app.get('*', function(req, res){
  console.log('New request:', req.url);
  res.sendFile('index.html', {root: '.'});
});

app.listen(port,function(){
  console.log('Server started on port ' + port + '!');
});
