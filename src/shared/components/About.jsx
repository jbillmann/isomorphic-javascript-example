var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            renderedOn: !(typeof window != 'undefined' && window.document) ? 'Server' : 'Client'
        };
    },
    render: function() {
        return (
            <div>
                <h2>About Component - Rendered on the { this.state.renderedOn } </h2>
                <h3>Title: {this.props.data.about}</h3>
            </div>
        );
    }
});