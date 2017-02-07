var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TerminusConstants = require('../constants/TerminusConstants');
var _ = require('underscore');

// Define initial data points
var _store = {
    url: '',
    open: false
};

// Extend store with EventEmitter to add eventing capabilities
var PageStore = _.extend({}, EventEmitter.prototype, {

  /**
   * Get data.
   */
  getData: function() {
      return _store;
  },

  /**
   * Return data.
   */
  isOpen: function () {
    return _store.open;
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
    case TerminusConstants.OPEN_PAGE:
      _store = action.data;
      break;
    default:
      return true;
  }

  // If action was responded to, emit change event
  PageStore.emitChange();

  return true;

});

module.exports = PageStore;
