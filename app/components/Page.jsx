var PageStore = require('/stores/PageStore');
var Postlet = require('/components/ev-block/index').Component;

var Page = React.createClass({

  getDefaultProps: function () {
      return {
        
      }
  },

  getInitialState: function () {
    var page = PageStore.getPageFromKey(this.props.page || '/');

    return {
      page: page,
      posts: []
    };
  },
  
  componentWillMount: function () {
    promise.get('/data/posts.json').then(function (err, response, xhr) {
      this.setState({
        posts: JSON.parse(response).posts
      });
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        {this.state.posts.map(function (post) {
          return <Postlet id={post.id} slug={post.slug} tags={post.tags} baseHref="/visuals/" imageUrl={post.imageUrl} />;
        })}
      </div>
    );
  }

});

module.exports = Page;
