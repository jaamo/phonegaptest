var React = require('react');
var PageStore = require('../stores/PageStore.js');

// Flux  view
var Page = React.createClass({

  // Get initial state from stores
  getInitialState: function () {
    return PageStore.getData();
  },

  // Add change listeners to stores
  componentDidMount: function () {
    PageStore.addChangeListener(this._onChange);
  },

  // Method to setState based upon Store changes
  _onChange: function () {
    this.setState(PageStore.getData());
  },

  //openItem: function(item) {
  //  TerminusActions.openPage(item);
  //},

  // Render page.
  render: function () {

    var self = this;

    return (
        <iframe src={this.state.url}></iframe>
    );

  }

});

module.exports = Page;