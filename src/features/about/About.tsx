import React from 'react';
import AboutIntro from './components/AboutIntro';
import CoreValues from './components/CoreValues';
import BoardOfDirectors from './components/BoardOfDirectors';

export default function About() {
  return (
    <div className="pt-32">
      <AboutIntro />
      <CoreValues />
      <BoardOfDirectors />
    </div>
  );
}
