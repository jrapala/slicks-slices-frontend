import React from 'react';

import CurrentlySlicing from '../components/CurrentlySlicing';
import HotSlices from '../components/HotSlices';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';

export default function HomePage() {
  const { hotSlices, slicemasters } = useLatestData();

  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}
