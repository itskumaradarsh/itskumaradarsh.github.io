import React from 'react';
import './styles.scss';
import { TagCloud } from 'react-tagcloud';

const TagCloudRenderer = () => {
  const data = [
    { value: 'React', count: 10 },
    { value: 'Redux', count: 8 },
    { value: 'Android', count: 6 },
    { value: 'AWS', count: 9 },
    { value: 'Angular', count: 4 },
    { value: 'Nodejs', count: 10 },
    { value: 'Express.js', count: 8 },
    { value: 'HTML5', count: 7 },
    { value: 'SCSS', count: 9 },
    { value: 'Jest', count: 9 },
    { value: 'Mocha', count: 8 },
    { value: 'Cypress', count: 6 },
    { value: 'Golang', count: 6 },
    { value: 'React Native', count: 4 },
    { value: 'Solidity', count: 5 },
    { value: 'JavaScript', count: 9 },
    { value: 'Lambda', count: 8 },
    { value: 'Electron', count: 4 },
    { value: 'Firebase', count: 7 },
    { value: 'Swift', count: 2 },
    { value: 'Kotlin', count: 3 },
    { value: 'Java', count: 7 },
    { value: 'Git', count: 8 },
    { value: 'PHP', count: 3 },
    { value: 'SqLite', count: 7 },
    { value: 'Bootstrap', count: 5 },
    { value: 'iOS', count: 2 },
    { value: 'PostgreSQL', count: 7 },
    { value: 'TimescaleDB', count: 4 },
    { value: 'MongoDB', count: 8 },
    { value: 'Kubernetes', count: 9 },
    { value: 'RabbitMQ', count: 8 },
    { value: 'Redis', count: 9 },
  ];

  const options = {
    luminosity: 'light',
    hue: 'blue', // blue, green, random
  };

  return (
    <div id="adarsh-tag-cloud">
      <TagCloud minSize={12} maxSize={35} colorOptions={options} tags={data} />
    </div>
  );
};

export default TagCloudRenderer;
