import React from 'react';
import styled from 'styled-components';
import { boolean } from '@storybook/addon-knobs';
import Text from "../Text"

export default { title: 'Buttons' };

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid transparent;
  transition: 0.3s all ease;
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`

export const main = () => (
  <Button className="px-4 py-2">
    <Text as="span" align="center" size="xl" variant="white">
      Button with text
    </Text>
  </Button>
)
