import styled from 'styled-components';

const Gradient = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: ${props => `linear-gradient(${props.direction || '90deg'}, ${props.theme.colors[props.fromVariant || 'primary'][props.fromShade || '500']}, ${props.theme.colors[props.toVariant || 'secondary'][props.toShade || '500']})`};
`

export default Gradient;
