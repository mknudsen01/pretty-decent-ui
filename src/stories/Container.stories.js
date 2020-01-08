import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Container from "../Container"

export default { title: 'Container' };

export const main = () => (
  <Container
    style={{ backgroundColor: '#333333' }}
    isCentered={boolean('is centered', false)}
  >
    <div className="text-white">
      Has max width of breakpoint minimum
    </div>
  </Container>
)
