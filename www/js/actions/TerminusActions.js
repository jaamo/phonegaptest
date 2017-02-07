var AppDispatcher = require('../dispatcher/AppDispatcher');
var TerminusConstants = require('../constants/TerminusConstants');

// Define action methods
var TerminusActions = {

  // Receive app data from the server.
  receiveData: function (data) {
    AppDispatcher.handleAction({
      actionType: TerminusConstants.DATA_LOADED,
      data: data
    })
  },

  // Navigation click.
  openPage: function(item) {
    AppDispatcher.handleAction({
      actionType: TerminusConstants.OPEN_PAGE,
      data: item
    })    
  },

  // Phonegap ready.
  deviceReady: function() {
    AppDispatcher.handleAction({
      actionType: TerminusConstants.DEVICE_READY
    });
  }


};

module.exports = TerminusActions;
