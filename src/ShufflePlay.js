import React from 'react'
import styled from 'styled-components/macro'
import { animated } from 'react-spring'
import {
  BUTTON_HEIGHT,
  BUTTON_WIDTH,
  EXPANDED_HEADER_HEIGHT,
  COLLAPSED_HEADER_HEIGHT,
} from './constants'

const HALF_BUTTON_HEIGHT = BUTTON_HEIGHT / 2

const Button = styled(animated.button)`
  background-color: #1ed760;
  color: white;
  height: ${BUTTON_HEIGHT}px;
  width: ${BUTTON_WIDTH}px;
  border-radius: ${HALF_BUTTON_HEIGHT}px;
  outline: none;
  border: none;
  align-self: center;
  position: absolute;
  z-index: 1;
`

const ShufflePlay = ({ y }) => {
  const transform = y.interpolate(
    yValue =>
      `translateY(${Math.max(
        EXPANDED_HEADER_HEIGHT - HALF_BUTTON_HEIGHT - yValue,
        10 + COLLAPSED_HEADER_HEIGHT - HALF_BUTTON_HEIGHT
      )}px)`
  )
  return <Button style={{ transform }}>SHUFFLE PLAY</Button>
}
export default ShufflePlay
