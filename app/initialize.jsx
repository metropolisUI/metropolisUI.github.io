var Locations = ReactRouter.Locations;
var Location = ReactRouter.Location;

var Page = require('./components/Page');
var About = require('./components/AboutPage');

var App = React.createClass({

  render: function () {
    return (
      <Locations hash>
        <Location path="/" handler={Page} />
        <Location path="/about/" handler={About} />
      </Locations>
    );
  }

});

module.exports = React.renderComponent(
  <App />,
  document.getElementById('app')
);
