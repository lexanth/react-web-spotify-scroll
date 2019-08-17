import React from 'react'
import styled from 'styled-components/macro'
import { animated } from 'react-spring'
import { COLLAPSED_HEADER_HEIGHT, HEADER_DELTA } from './constants'
import { absoluteFill } from './absoluteFill'

const HeaderContainer = styled(animated.div)`
  ${absoluteFill}
  height: ${COLLAPSED_HEADER_HEIGHT}px;
  background-color: black;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const HeaderText = styled.span`
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: 400;
`

const CollapsedHeader = ({ artist, y }) => {
  const headerOpacity = y.interpolate({
    range: [100, 150],
    output: [0, 1],
    extrapolate: 'clamp',
  })
  return (
    <HeaderContainer style={{ opacity: headerOpacity }}>
      <HeaderText>{artist}</HeaderText>
    </HeaderContainer>
  )
}
export default CollapsedHeader
