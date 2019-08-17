import React from 'react'
import styled from 'styled-components/macro'
import { animated } from 'react-spring'
import { absoluteFill } from './absoluteFill'
import {
  EXPANDED_HEADER_HEIGHT,
  BUTTON_HEIGHT,
  COLLAPSED_HEADER_HEIGHT,
} from './constants'

export const Image = styled.img`
  max-height: 100%;
`
export const CoverImageContainer = styled(animated.div)`
  ${absoluteFill};
  height: ${EXPANDED_HEADER_HEIGHT + BUTTON_HEIGHT * 2}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`

const Cover = ({ src, y }) => {
  const opacity = y.interpolate({
    range: [0, COLLAPSED_HEADER_HEIGHT],
    output: [1, 0],
    extrapolate: 'clamp',
  })
  return (
    <CoverImageContainer style={{ opacity }}>
      <Image src={src} />
    </CoverImageContainer>
  )
}
export default Cover
