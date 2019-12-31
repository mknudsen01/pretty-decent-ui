import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
`

export default Row;
