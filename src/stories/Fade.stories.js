import React from 'react';
import { boolean, select, number, text } from '@storybook/addon-knobs';
import Fade from "../Fade"

export default { title: 'Fade' };

export const main = () => (
  <Fade
    in={boolean('in', false)}
    duration={number('duration', 300)}
    from={select('from', Fade.DIRECTIONS, Fade.DIRECTIONS.LEFT)}
    amount={text('amount (px or percent)', '5%')}
  >
    <div style={{ height: 100, width: '100%', backgroundColor: 'blue', color: 'white' }}>
      Has max width of breakpoint minimum
    </div>
  </Fade>
)
