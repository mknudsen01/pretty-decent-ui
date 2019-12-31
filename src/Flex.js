import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-grow: ${props => props.flexGrow || '0'};
  flex-basis: ${props => props.flexBasis || 'auto'};
  max-width: ${props => props.maxWidth || props.flexBasis || 'none'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
`

export default Flex;
