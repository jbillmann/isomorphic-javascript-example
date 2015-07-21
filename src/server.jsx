var React = require('react'),
    Router = require('react-router'),
    express = require('express'),
    routes = require('./shared/routes');
    
var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/js/app.js', function(req, res) {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/js/app.js');
});

app.get('/*', function(req, res) {
    var router = Router.create({location: req.url, routes: routes});
    router.run(function(Handler, state) {
        var content = React.renderToString(React.createElement(Handler, null));
        return res.render('index', { content: content });
    });
});

app.listen(3000);