var React = require('react'),
    Router = require('react-router'),
    routes = require('../shared/routes');

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    React.render(<Handler/>, document.getElementById('app'));
});