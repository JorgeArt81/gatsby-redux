import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { store } from './src/store/store';
import { Provider } from 'react-redux';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <Provider store={store}>{element}</Provider>;
};
