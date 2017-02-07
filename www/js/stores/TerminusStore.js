var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TerminusConstants = require('../constants/TerminusConstants');
var _ = require('underscore');



// Initial data.
var _store = {
  data: {},
  deviceReady: false
};



/**
 * Store for main data.
 */
var TerminusStore = _.extend({}, EventEmitter.prototype, {



  /**
   * Return data.
   */
  getData: function () {
    return _store.data;
  },



  /**
   * Returns true if device is ready.
   */
  isDeviceReady: function() {
    return _store.deviceReady;
  },



  // Emit Change event
  emitChange: function () {
    this.emit('change');
  },



  // Add change listener
  addChangeListener: function (callback) {
    this.on('change', callback);
  },




  // Remove change listener
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }




});



// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {

  var action = payload.action;
  var text;

  switch (action.actionType) {

    // Data loaded.
    case TerminusConstants.DATA_LOADED:
      _store.data = action.data;
      break;
    case TerminusConstants.DEVICE_READY:
      _store.deviceReady = true;
      break;
    default:
      return true;

  }

  // If action was responded to, emit change event
  TerminusStore.emitChange();

  return true;

});



module.exports = TerminusStore;
