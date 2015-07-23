var React = require('react'),
    Route = require('react-router').Route;

module.exports = [
    <Route path="/" handler={require('./components/App')}  >
        <Route path="/" name="home" handler={require('./components/Home')}/>
        <Route path="about" name="about" handler={require('./components/About')}/>
        <Route path="contact" name="contact" handler={require('./components/Contact')}/>
    </Route>
];