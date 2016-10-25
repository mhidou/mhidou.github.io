import React from 'react';
import TitleContent from '../TitleContent';
import LineContent from '../LineContent';
import Section from '../Section';
import SocialLinks from '../SocialLinks';

class How extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Section id="touch" selfheight>
        <TitleContent title="Get in touch" />
        <SocialLinks />
      </Section>
    )
  }
}

export default How
