import React from 'react';
import LoadingGrid from './LoadingGrid';

export default function HotSlices({ hotSlices }) {
  return (
    <div>
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p>Nothin' in the Case</p>}
    </div>
  );
}
