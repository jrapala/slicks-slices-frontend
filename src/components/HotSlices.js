import React from 'react';
import LoadingGrid from './LoadingGrid';
import ItemGrid from './ItemGrid';

export default function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices</span>
      </h2>
      <p>Come on by, buy the slice!</p>
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p>Nothin' in the Case</p>}
      {hotSlices && hotSlices.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}
