import styled from 'styled-components';
import mediaqueries from "./mediaqueries"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => `${100 * (props.xs || 12) / 12}%`};
  max-width: ${props => `${100 * (props.xs || 12) / 12}%`};

  ${mediaqueries.sm`
    flex-basis: ${props => (100 * (props.sm || props.xs || 12) / 12)}%;
    max-width: ${props => (100 * (props.sm || props.xs || 12) / 12)}%;
  `}


  ${mediaqueries.md`
    flex-basis: ${props => (100 * (props.md || props.sm || props.xs || 12) / 12)}%;
    max-width: ${props => (100 * (props.md || props.sm || props.xs || 12) / 12)}%;
  `}

  ${mediaqueries.lg`
    flex-basis: ${props => (100 * (props.lg || props.md || props.sm || props.xs || 12) / 12)}%;
    max-width: ${props => (100 * (props.lg || props.md || props.sm || props.xs || 12) / 12)}%;
  `}
`

export default Column;




