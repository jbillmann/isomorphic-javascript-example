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
                <h2>Home Component - Rendered on the { this.state.renderedOn } </h2>
            </div>
        );
    }
});