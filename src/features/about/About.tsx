import React from 'react';
import AboutIntro from './components/AboutIntro';
import CoreValues from './components/CoreValues';
import BoardOfDirectors from './components/BoardOfDirectors';
import MissionVision from './components/Mission&Vision';

export default function About() {
  return (
    <div>
      <AboutIntro />
      <BoardOfDirectors />
      <CoreValues />
      <MissionVision />
    </div>
  );
}
