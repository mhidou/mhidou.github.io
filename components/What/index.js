import React from 'react';
import TitleContent from '../TitleContent';
import LineContent from '../LineContent';
import LinkContent from '../LinkContent';
import Section from '../Section';

class What extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Section id="what" valign>
        <TitleContent title="What I do?" />
        <LineContent text="I spend my 'work' time between writing code, modeling my ideas, designing UIs and maintaining products." />
        <LineContent text="I'm also always looking for new challenges." />
        <LineContent text="Half of my free time, I'm reading about my work to constantly improve my 'full stack' skills. " />
        <LineContent text="You can follow my news." />
        <LinkContent text="HERE =>" link="/news" />
      </Section>
    )
  }
}

export default What
