import React from 'react';

import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

// Wrapper for every page
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}

// Wrapper for the root element
export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
