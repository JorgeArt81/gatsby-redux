import * as React from 'react';
import type { GatsbySSR } from 'gatsby';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
