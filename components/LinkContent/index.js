import React from 'react';
import './linkcontent.less';

class LinkContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="linkcontainer">
        <a className="linkcontent" href={this.props.link}>{this.props.text}{this.props.children}</a>
      </div>
    )
  }
}

export default LinkContent
