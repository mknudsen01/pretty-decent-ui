import styled from 'styled-components';
import mediaqueries, { breakpoints } from './mediaqueries';

const Container = styled.div`
  width: 100%;
  ${mediaqueries.sm`
    max-width: ${props => `${breakpoints['sm']}px`}
  `}
  ${mediaqueries.md`
    max-width: ${props => `${breakpoints['md']}px`}
  `}
  ${mediaqueries.lg`
    max-width: ${props => `${breakpoints['lg']}px`}
  `}
  margin: ${props => props.isCentered ? '0 auto' : '0'};
`

export default Container;
