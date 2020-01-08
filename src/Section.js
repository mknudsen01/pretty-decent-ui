import styled from 'styled-components'

export default styled.section`
  background-color: ${props => props.variant ? props.theme.colors[props.variant][props.shade || 500] : props.theme.colors.white};
`
