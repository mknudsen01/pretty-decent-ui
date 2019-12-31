import styled from 'styled-components';

const ContentContainer = styled.div`
  max-width: ${props => `${props.theme.maxContentWidth || 1080}px`};
  margin: 0 auto;
`

export default ContentContainer;
