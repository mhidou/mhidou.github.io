import React from 'react';
import { Radar } from 'react-chartjs-2';
import './skillscontent.less';

class SkillsContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    const chartOptions = {
      defaultFontFamily: 'Fira Code',
      elements: {
        line: {
          lineTension: 100
        }
      },
      legend: {
        display: false
      },
      scale: {
        ticks: {
          display: false,
          beginAtZero: true,
          max: 100,
          autoSkip: false
        }
      }
    };

    const domainsData = {
      datasets: [
        {
          backgroundColor: 'rgba(76,175,80,0.5)',
          borderColor: '#4caf50',
          pointBackgroundColor: '#29282c',
          pointBorderColor: '#29282c',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#29282c',
          data: [90, 70, 80, 85, 60, 90, 70]
        }
      ],
      labels: [
        'Front End',
        'UX/UI',
        'Growth Hacking',
        'Analysis/Modeling',
        'Server/Network',
        'Back End',
        'Test'
      ]
    };

    const languagesData = {
      datasets: [
        {
          backgroundColor: 'rgba(33,150,243,0.5)',
          borderColor: '#2196f3',
          pointBackgroundColor: '#29282c',
          pointBorderColor: '#29282c',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#29282c',
          data: [50, 90, 80, 70, 50, 90, 50, 90, 40, 40, 50, 70, 80]
        }
      ],
      labels: [
        'C/C++',
        'PHP',
        'JAVA',
        'Ruby',
        'Python',
        'JS/ES6',
        'C#',
        'CSS/Less/Sass',
        'Clojure',
        'Haskell',
        'GO',
        'BASH',
        'Objective-C/Swift'
      ]
    };

    const frameworksdata = {
      datasets: [
        {
          backgroundColor: 'rgba(255,152,0,0.5)',
          borderColor: '#ff9800',
          pointBackgroundColor: '#29282c',
          pointBorderColor: '#29282c',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#29282c',
          data: [90, 80, 75, 50, 80, 60, 40, 90, 90]
        }
      ],
      labels: [
        'Meteor',
        'React',
        'React native',
        'RxJS',
        'Angular',
        'Ruby on rails',
        'Django',
        'nodejs',
        'Laravel'
      ]
    };

    return (
      <div className="skillscharts">
        <h3>Fields</h3>
        <Radar data={domainsData} options={chartOptions} />
        <h3>Languages</h3>
        <Radar data={languagesData} options={chartOptions} />
        <h3>Frameworks</h3>
        <Radar data={frameworksdata} options={chartOptions} />
      </div>
    );
  }
}

export default SkillsContent
