var PageStore = require('/stores/PageStore');
var Author = require('/components/author/index').Component;

var Page = React.createClass({

  getDefaultProps: function () {
      return {
        
      }
  },

  getInitialState: function () {
    var page = PageStore.getPageFromKey(this.props.page || '/');

    return {
      page: page,
      data: {
        meta: {},
        authors: []
      }
    };
  },
  
  componentWillMount: function () {
    promise.get('/data/bootstrap.json').then(function (err, response, xhr) {
      this.setState({
        data: JSON.parse(response)
      });
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        <h1 className="section-title section-title--for-avatars">Authors</h1>
        {this.state.data.authors.map(function (author) {
          return <Author authorData={author} />;
        })}
      </div>
    );
  }

});

module.exports = Page;
