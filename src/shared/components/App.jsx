var React = require('react'),
    Link = require('react-router').Link,
    RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="home" className="navbar-brand" href="#">Isomorphic JavaScript App</Link>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="home">Home</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container" style={{paddingTop: '40px'}}>
                    <h1 className="text-muted">Isomorphic JavaScript App</h1>
                    <hr />
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});