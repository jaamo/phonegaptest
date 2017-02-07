var TerminusActions = require('../actions/TerminusActions');

module.exports = {

  getData: function () {
    var data = JSON.parse(localStorage.getItem('terminus'));
    TerminusActions.receiveData(data);
  }

};