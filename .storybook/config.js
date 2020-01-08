import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { ThemeProvider } from "styled-components"
import GlobalStyle from '../src/GlobalStyle'
import theme from '../theme'

import "../src/normalize.css"


configure(require.context('../src/stories', true, /\.stories\.js$/), module);

const styles = {
  backgroundColor: 'green',
};
const Decorator = storyFn => (
  <ThemeProvider theme={theme}>
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <GlobalStyle />
      <main className="p-4">{storyFn()}</main>
    </div>
  </ThemeProvider>

);
addDecorator(withKnobs);
addDecorator(Decorator);
