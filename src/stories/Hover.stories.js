import React from 'react';
import styled from 'styled-components';
import { boolean, select, number, text } from '@storybook/addon-knobs';
import Text from "../Text"
import Flex from "../Flex"
import theme from "../../theme"

export default { title: 'Hover styles' };

const TextDisplay = ({ children, className }) =>
  <Text size="xl" className={`transition-300 py-2 ${className}`}>{children}</Text>

const TextDisplayChild = ({ children, className }) => (
  <Flex className={`py-2 ${className}`}>
    <Text className="transition-300" size="xl">{children}</Text>
  </Flex>
)

const StyledScale = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  transition: 0.3s all ease;
  &:hover {
    background-color: ${props => props.theme.colors.secondary[700]}
  };
`

const Scale = ({ className }) => (
  <StyledScale className={className} />
)



export const translateXParent = () => (
  <>
    {Object.keys(theme.spacing).map((label) => (
      <TextDisplay className={`hover:translate-x-${label}`}>hover:translate-x-{label}</TextDisplay>
    ))}
  </>
)

export const translateXChild = () => (
  <>
    {Object.keys(theme.spacing).map((label) => (
      <TextDisplayChild className={`hover:translate-child-x-${label}`}>hover:translate-child-x-{label}</TextDisplayChild>
    ))}
  </>
)

export const translateYParent = () => (
  <>
    {Object.keys(theme.spacing).map((label) => (
      <TextDisplay className={`hover:translate-y-${label}`}>hover:translate-y-{label}</TextDisplay>
    ))}
  </>
)

export const translateYChild = () => (
  <>
    {Object.keys(theme.spacing).map((label) => (
      <TextDisplayChild className={`hover:translate-child-y-${label}`}>hover:translate-child-y-{label}</TextDisplayChild>
    ))}
  </>
)


