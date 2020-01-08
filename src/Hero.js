import styled from 'styled-components';

const Hero = styled.section`
  min-height: 650px;
  height: 100vh;
  position: relative;
  width: 100%;
  background-color: ${props => props.variant ? props.theme.colors[props.variant][props.shade || 500] : '#999'};
  overflow: hidden;
`

export default Hero;
