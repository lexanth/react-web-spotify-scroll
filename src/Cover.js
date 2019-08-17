import React from 'react'
import styled from 'styled-components/macro'

import { absoluteFill } from './absoluteFill'
import { EXPANDED_HEADER_HEIGHT, BUTTON_HEIGHT } from './constants'

export const Image = styled.img`
  max-height: 100%;
`
export const CoverImageContainer = styled.div`
  ${absoluteFill};
  height: ${EXPANDED_HEADER_HEIGHT + BUTTON_HEIGHT * 2}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`

const Cover = ({ src }) => {
  const opacity = 1
  return (
    <CoverImageContainer style={{ opacity }}>
      <Image src={src} />
    </CoverImageContainer>
  )
}
export default Cover
