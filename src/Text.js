import styled from 'styled-components';
import mediaqueries from './mediaqueries';

const Text = styled.div`
  font-size: ${props => props.size ? props.theme.typography.sizes[props.size] : props.theme.typography.sizes['base']};
  line-height: ${props => props.lineHeight || 'inherit'};
  color: ${props => props.variant ? props.theme.colors[props.variant][props.shade || 500] : 'inherit'};
  text-align: ${props => props.align || 'left'};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-decoration: ${props => props.textDecoration || 'none'};
  letter-spacing: ${props => props.letterSpacing ? `${props.letterSpacing}px` : 'normal'};

  ${mediaqueries.xs`
    font-size: ${props => props.theme.typography.sizes[props.xs || props.size]};
  `}
  ${mediaqueries.sm`
    font-size: ${props => props.theme.typography.sizes[props.sm || props.xs || props.size]};
  `}
  ${mediaqueries.md`
    font-size: ${props => props.theme.typography.sizes[props.md || props.sm || props.xs || props.size]};
  `}
  ${mediaqueries.lg`
    font-size: ${props => props.theme.typography.sizes[props.lg || props.md || props.sm || props.xs || props.size]};
  `}
`

export default Text;
