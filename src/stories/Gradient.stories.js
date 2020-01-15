import React from 'react';
import styled from 'styled-components';
import { boolean, select, number, text } from '@storybook/addon-knobs';
import Text from "../Text";
import Gradient from "../components/Gradient";
import theme from "../../theme"


const colors = Object.keys(theme.colors)
const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900]

export default { title: 'Gradient' };
export const main = () => {
  const fromVariant = select('fromVariant', colors, 'indigo');
  const fromShade = select('fromShade', shades, 500);
  const toVariant = select('toVariant', colors, 'indigo');
  const toShade = select('toShade', shades, 100);
  const direction = number('direction degrees', 90);

  return (
    <>
      <div style={{ width: '100%', height: 300, position: 'relative' }}>
        <Gradient direction={`${direction || 90}deg`} fromVariant={fromVariant} fromShade={fromShade} toVariant={toVariant} toShade={toShade} />
        <Text className="relative" variant="white" align="center" size="2xl">Hello</Text>
      </div>
    </>
  )
}
