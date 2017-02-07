var React = require('react');
var Navigation = require('./Navigation.react.js');
var TerminusStore = require('../stores/TerminusStore.js');
var Page = require('./Page.react.js');



/**
 * Main container.
 */
var TerminusApp = React.createClass({



  /**
   * Initial state.
   */
  getInitialState: function () {
    return {
      data: { navigation: [] },
      deviceReady: false
    };
  },



  /**
   * Add change listeners to stores
   */
  componentDidMount: function () {
    TerminusStore.addChangeListener(this._onChange);
  },



  /**
   * Remove change listeners from stores
   */
  componentWillUnmount: function () {
    TerminusStore.removeChangeListener(this._onChange);
  },



  /**
   * Render.
   */
  render: function () {

    var deviceReady = this.state.deviceReady ? 'yes' : 'no';

    return (
      <div className="flux-cart-app">
        Device ready: {deviceReady}
        <Page />
        <Navigation navigation={this.state.data.navigation} />
      </div>
    );


  },



  /**
   * Method to setState based upon Store changes
   */
  _onChange: function () {
    this.setState({ deviceReady: TerminusStore.isDeviceReady(), data: TerminusStore.getData() });
  }



});

module.exports = TerminusApp;
