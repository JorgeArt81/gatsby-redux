import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { Provider } from 'react-redux';
import { store } from './src/store';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <Provider store={store}>{element}</Provider>;
};
