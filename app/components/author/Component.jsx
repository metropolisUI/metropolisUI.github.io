var Component = React.createClass({

  getDefaultProps: function () {
    return {
      authorData: {
        gravatarHash: 'undefined'
      }
    }
  },

  getAvatarUrl: function () {
    return '//www.gravatar.com/avatar/' + this.props.authorData.gravatarHash + '?d=retro&s=200';
  },

  render: function () {
    return (
      <section className="media-block media-block--cv-style">
        <img src={this.getAvatarUrl()} className="media-block__image" width="100" />
        <h2 className="media-block__title"><span className="badge badge--right-tip">Author</span> {this.props.authorData.displayName}</h2>
        <h2 className="media-block__title"><span className="badge badge--right-tip">Occupation</span> {this.props.authorData.occupation}</h2>
        <h2 className="media-block__title"><span className="badge badge--right-tip">Specialties</span> {this.props.authorData.specialties}</h2>
        <hr />
        {/* List of contributions */}
      </section>
    );
  }

});

module.exports = Component;
