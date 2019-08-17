import React from 'react'
import styled from 'styled-components/macro'
import { absoluteFill } from './absoluteFill'
import { EXPANDED_HEADER_HEIGHT, BUTTON_HEIGHT } from './constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${EXPANDED_HEADER_HEIGHT}px;
  position: relative;
  flex: 1 0 ${EXPANDED_HEADER_HEIGHT}px;
`
const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 1)
  );
`
const ExpandedHeaderText = styled.span`
  text-align: center;
  color: white;
  font-size: 48px;
`
const ExpandedHeaderTextContainer = styled.div`
  ${absoluteFill};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${BUTTON_HEIGHT}px;
`

const ExpandedHeader = ({ artist }) => {
  const height = EXPANDED_HEADER_HEIGHT
  const opacity = 1
  return (
    <Container>
      <Gradient style={{ height }} />
      <ExpandedHeaderTextContainer style={{ opacity }}>
        <ExpandedHeaderText>{artist}</ExpandedHeaderText>
      </ExpandedHeaderTextContainer>
    </Container>
  )
}

export default ExpandedHeader
