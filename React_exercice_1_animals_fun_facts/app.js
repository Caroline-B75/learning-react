import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const background = (
  <img
    className='background'
    alt='ocean'
    src='/images/ocean.jpg' />
);

const images = [];
for (const animal in animals) {
  images.push(<img key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button' onClick={displayFact} />)
};


const animalFacts = (
  <div>
    {background};
    <div className='animals'>{images}</div>
    <p id='fact'></p>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
  </div>
  );

  function displayFact(e) {
    const animalName = e.target.alt;
    const index = Math.floor(Math.random() * animals[animalName].facts.length);
    document.getElementById('fact').innerHTML = animals[animalName].facts[index];
  };

ReactDOM.render(animalFacts, document.getElementById('root'));
