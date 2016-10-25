import React from 'react';
import './titlecontent.less';

class TitleContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <h2 className="section-title">{this.props.title}</h2>
  }
}

export default TitleContent
