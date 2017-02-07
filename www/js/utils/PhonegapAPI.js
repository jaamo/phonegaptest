var TerminusActions = require('../actions/TerminusActions');

/**
 * Listen PhoneGap init event.
 */
module.exports = {

  init: function () {
    document.addEventListener('deviceready', function() {
      TerminusActions.deviceReady();
    }, false);
  }

};