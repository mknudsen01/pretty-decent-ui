import React from 'react';
import styled from 'styled-components';
import { boolean, select, number, text } from '@storybook/addon-knobs';
import { DisplayOne, DisplayTwo, HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, LeadText, BodyText } from '../components/typography';

export default { title: 'Typography' };

export const main = () => {
  const variant = text('variant', 'text');
  const shade = number('shade', 700);
  return (
    <>
      <DisplayOne variant={variant} shade={shade}>Display 1 text</DisplayOne>
      <DisplayTwo variant={variant} shade={shade}>Display 2 text</DisplayTwo>
      <HeadingOne variant={variant} shade={shade}>Heading 1 text</HeadingOne>
      <HeadingTwo variant={variant} shade={shade}>Heading 2 text</HeadingTwo>
      <HeadingThree variant={variant} shade={shade}>Heading 3 text</HeadingThree>
      <HeadingFour variant={variant} shade={shade}>Heading 4 text</HeadingFour>
      <HeadingFive variant={variant} shade={shade}>Heading 5 text</HeadingFive>
      <LeadText variant={variant} shade={shade}>Lead text</LeadText>
      <BodyText variant={variant} shade={shade}>Body text</BodyText>
    </>
  )
}
