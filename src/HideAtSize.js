import styled from 'styled-components';
import mediaqueries from "./mediaqueries"


const HideAtSize = styled.div`
  width: 100%;
  ${mediaqueries.xs`
    display: ${props => props.xs ? 'none' : 'inherit'};
  `}
  ${mediaqueries.sm`
    display: ${props => props.sm ? 'none' : 'inherit'};
  `}
  ${mediaqueries.md`
    display: ${props => props.md ? 'none' : 'inherit'};
  `}
  ${mediaqueries.lg`
    display: ${props => props.lg ? 'none' : 'inherit'};
  `}
`

export default HideAtSize;
