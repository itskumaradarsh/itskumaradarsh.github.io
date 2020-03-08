import React from 'react';
import './styles.scss';
import { TagCloud } from 'react-tagcloud';

const TagCloudRenderer = () => {
  const data = [
    { value: 'React', count: 10 },
    { value: 'Redux', count: 7 },
    { value: 'Android', count: 8 },
    { value: 'AWS', count: 5 },
    { value: 'Angular', count: 7 },
    { value: 'Nodejs', count: 8 },
    { value: 'Express.js', count: 7 },
    { value: 'HTML5', count: 4 },
    { value: 'SCSS', count: 7 },
    { value: 'Webpack', count: 5 },
    { value: 'Babel.js', count: 4 },
    { value: 'ECMAScript', count: 7 },
    { value: 'Jest', count: 7 },
    { value: 'Mocha', count: 5 },
    { value: 'Cypress', count: 5 },
    { value: 'React Native', count: 4 },
    { value: 'Angular.js', count: 1 },
    { value: 'TypeScript', count: 8 },
    { value: 'Flow', count: 3 },
    { value: 'NPM', count: 10 },
    { value: 'Solidity', count: 5 },
    { value: 'JavaScript', count: 7 },
    { value: 'Lambda', count: 8 },
    { value: 'Electron', count: 4 },
    { value: 'Firebase', count: 7 },
    { value: 'Swift', count: 2 },
    { value: 'Kotlin', count: 3 },
    { value: 'Java', count: 7 },
    { value: 'Git', count: 8 },
    { value: 'PHP', count: 3 },
    { value: 'CSS', count: 7 },
    { value: 'SqLite', count: 7 },
    { value: 'XML', count: 7 },
    { value: 'Bootstrap', count: 5 },
    { value: 'JQuery', count: 7 },
    { value: 'JSON', count: 10 },
    { value: 'iOS', count: 2 },
    { value: 'PostgreSQL', count: 7 },
    { value: 'NPM', count: 10 },
    { value: 'TimescaleDB', count: 4 },
  ];

  const options = {
    luminosity: 'light',
    hue: 'blue',
  };

  return (
    <div id="adarsh-tag-cloud">
      <TagCloud minSize={12} maxSize={35} colorOptions={options} tags={data} />
    </div>
  );
};

export default TagCloudRenderer;
