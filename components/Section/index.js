import React from 'react';
import './section.less';

class Section extends React.Component {
  constructor(id) {
    super();
  }
  render() {
    let sectionClass = '';
    let containerClass = 'container';
    if(this.props.valign){
      containerClass += ' valign';
    }

    if(this.props.selfheight) {
      sectionClass += 'selfheight';
    }
    return (
      <section id={this.props.id} className={sectionClass}>
        <div className={containerClass}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default Section
