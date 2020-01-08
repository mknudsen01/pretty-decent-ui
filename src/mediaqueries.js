import { css } from 'styled-components';

export const breakpoints = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 };

// Iterate through the sizes and create a media template
const mediaqueries = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default mediaqueries;
