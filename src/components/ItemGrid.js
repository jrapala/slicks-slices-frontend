import React from 'react';

import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function ItemGrid({ items }) {
  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemStyles key={item._id}>
          <p>
            <span className="mark">{item.name}</span>
          </p>
          <img
            // Sanity image options via query
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            width="500"
            height="400"
            alt={item.name}
            style={{
              // low quality fallback
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}
