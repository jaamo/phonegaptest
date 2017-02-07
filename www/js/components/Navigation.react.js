var React = require('react');
var TerminusActions = require('../actions/TerminusActions');


var Navigation = React.createClass({

  openItem: function(item) {
    TerminusActions.openPage(item);
  },

  // Render cart view
  render: function () {

    var self = this;

    return (
        <ul>
            {this.props.navigation.map(function (naviItem) {
              return (
                <li key={naviItem.url}><a href="javascript:;" onClick={self.openItem.bind(self, naviItem)}>{naviItem.title}</a></li>
              )
            })}
        </ul>
    );

  }

});

module.exports = Navigation;