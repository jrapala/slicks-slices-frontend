import React from 'react';
import Layout from './src/components/Layout';

// Wrapper for every page
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}
