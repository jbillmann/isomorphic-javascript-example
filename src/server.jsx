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
    res.locals.appState = {
        name: 'Jeremiah Billmann',
        contact: 'myemail@mydomain.com',
        about: 'Software Engineer'
    };

    router.run(function(Handler, state) {
        var content = React.renderToString(React.createElement(Handler, {data: res.locals.appState}));
        return res.render('index', {content: content, appState: res.locals.appState});
    });
});

app.listen(3000);