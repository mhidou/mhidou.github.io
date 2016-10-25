import React from 'react';
import './linecontent.less';

class LineContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <p className="linecontent">{this.props.text}</p>
    )
  }
}

export default LineContent
