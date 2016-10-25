import React from 'react';
import TitleContent from '../TitleContent';
import LineContent from '../LineContent';
import Section from '../Section';
import './where.less';

const rabatImage = document.createElement('img');
rabatImage.src = require('../../assets/img/rabat.jpg');
const parisImage = document.createElement('img');
parisImage.src = require('../../assets/img/paris.jpg');

class Where extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Section id="where" valign>
        <TitleContent title="Where" />
        <LineContent text="I share my time between `Paris, France` and `Rabat, Morocco`. " />
        <p className="place">
          <img src={parisImage.src} alt="Paris, France" />
        </p>
        <p className="place">
          <img src={rabatImage.src} alt="Rabat, Morocco" />
        </p>


      </Section>
    )
  }
}

export default Where
