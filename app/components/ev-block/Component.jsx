var Component = React.createClass({

  getDefaultProps: function () {
    return {
      id: 'xxx',
      tags: [],
      baseHref: '/',
      tagsBaseHref: '/tags/',
      imageUrl: 'https://placeimg.com/1000/200/nature',
      type: ''
    }
  },

  render: function () {
    return (
      <article className="visual-postlet" style={{backgroundImage: ['url(', this.props.imageUrl, ')'].join('')}}>
        <h2 className="visual-postlet__permalink-wrap"><a href={this.props.baseHref + this.props.slug} className={"visual-postlet__permalink link-icon link-icon--"+this.props.type.toLowerCase()}><span className="badge badge--top-tip badge--light">{ this.props.type }</span></a></h2>
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
