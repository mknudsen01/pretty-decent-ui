import React from 'react';
import Text from "../Text";

export const DisplayOne = ({ children, size = '8xl',
  xs = '6xl', sm = '6xl', md = '7xl', lg = '8xl', fontWeight = 700,
  ...rest
}) => (
    <>
      <Text size={size} xs={xs} sm={sm} md={md} lg={lg} fontWeight={fontWeight} {...rest}>{children}</Text>
    </>
  );

export const DisplayTwo = ({ children, fontWeight = 700, size = '7xl',
  xs = '5xl', sm = '5xl', md = '6xl', lg = '7xl',
  ...rest
}) => (
    <>
      <Text size={size} xs={xs} sm={sm} md={md} lg={lg} fontWeight={fontWeight} {...rest}>{children}</Text>
    </>
  );

export const HeadingOne = ({ children, fontWeight = 600, size = '6xl',
  xs = '4xl', sm = '4xl', md = '5xl', lg = '6xl',
  ...rest
}) => (
    <>
      <Text size={size} xs={xs} sm={sm} md={md} lg={lg} fontWeight={fontWeight} {...rest}>{children}</Text>
    </>
  );

export const HeadingTwo = ({ children, fontWeight = 600, size = '5xl',
  xs = '3xl', sm = '3xl', md = '4xl', lg = '5xl',
  ...rest
}) => (
    <>
      <Text size={size} xs={xs} sm={sm} md={md} lg={lg} fontWeight={fontWeight} {...rest}>{children}</Text>
    </>
  );

export const HeadingThree = ({ children, fontWeight = 500, size = '4xl',
  xs = '2xl', sm = '2xl', md = '3xl', lg = '4xl',
  ...rest
}) => (
    <>
      <Text size={size} xs={xs} sm={sm} md={md} lg={lg} fontWeight={fontWeight} {...rest}>{children}</Text>
    </>
  );

export const HeadingFour = ({ children, fontWeight = 500, size = '3xl',
  xs = 'xl', sm = 'xl', md = '2xl', lg = '3xl',
  ...rest
}) => (
    <>
      <Text size={size} xs={xs} sm={sm} md={md} lg={lg} fontWeight={fontWeight} {...rest}>{children}</Text>
    </>
  );

export const HeadingFive = ({ children, fontWeight = 500, size = '2xl',
  xs = 'lg', sm = 'lg', md = 'xl', lg = '2xl',
  ...rest
}) => (
    <>
      <Text size={size} xs={xs} sm={sm} md={md} lg={lg} fontWeight={fontWeight} {...rest}>{children}</Text>
    </>
  );

export const LeadText = ({ children, fontWeight = 500, size = 'xl',
  xs = 'xl', sm = 'xl', md = 'xl', lg = 'xl',
  ...rest
}) => (
    <>
      <Text size={size} xs={xs} sm={sm} md={md} lg={lg} fontWeight={fontWeight} {...rest}>{children}</Text>
    </>
  );

export const BodyText = ({ children, fontWeight = 500, size = 'base',
  xs = 'base', sm = 'base', md = 'base', lg = 'base',
  ...rest
}) => (
    <>
      <Text size={size} xs={xs} sm={sm} md={md} lg={lg} fontWeight={fontWeight} {...rest}>{children}</Text>
    </>
  );
