var Component = React.createClass({

  getDefaultProps: function () {
    return {
      id: 'xxx',
      tags: [],
      baseHref: '/',
      tagsBaseHref: '/tags/',
      imageUrl: 'https://placeimg.com/1000/200/nature'
    }
  },

  render: function () {
    return (
      <article className="visual-postlet" style={{backgroundImage: ['url(', this.props.imageUrl, ')'].join('')}}>
        <h2 className="visual-postlet__permalink-wrap"><a href={this.props.baseHref + this.props.id} className="visual-postlet__permalink">{ this.props.id }</a></h2>
        <nav className="block-nav block-nav--tags block-nav--hover-invert">
        {this.props.tags.map(function (tag) {
          return <a href={this.props.tagsBaseHref + tag} className="block-nav__link active"><span className="block-nav__link-text">#{tag}</span></a>;
        }.bind(this))}
        </nav>
      </article>
    );
  }

});

module.exports = Component;
