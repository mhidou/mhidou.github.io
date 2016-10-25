import React from 'react';
import TitleContent from '../TitleContent';
import LineContent from '../LineContent';
import Section from '../Section';
import SkillsContent from '../SkillsContent';

class How extends React.Component {
  constructor() {
    super();
  }
  render() {

    return (
      <Section id="hello">
        <TitleContent title="Skills" />
        <SkillsContent/>
      </Section>
    )
  }
}

export default How
