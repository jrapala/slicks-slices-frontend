import React from 'react';
import LoadingGrid from './LoadingGrid';
import ItemGrid from './ItemGrid';

export default function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters On</span>
      </h2>
      <p>Standing by, ready to slice you up!</p>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters && !slicemasters?.length && (
        <p>No one is working right now!</p>
      )}
      {slicemasters && slicemasters.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}
