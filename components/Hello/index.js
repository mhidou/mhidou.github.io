import React from 'react';
import TitleContent from '../TitleContent';
import LineContent from '../LineContent';
import Section from '../Section';

class Hello extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Section id='hello' valign>
        <TitleContent title="Hi" />
        <LineContent text="I Am Mehdi Ahraoui, a passionate full stack engineer." />
        <LineContent text="I love to write code and build great products. When I'm not working, I like to travel, discover new places, read, meet new people, learn new things and share my knowledge." />
        <LineContent text="If you are here, you probably want to know more about me 😉, so let's scroll down." />
      </Section>
    )
  }
}

export default Hello
