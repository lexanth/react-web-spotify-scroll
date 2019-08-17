import React from 'react'
import styled from 'styled-components/macro'
import { COLLAPSED_HEADER_HEIGHT } from './constants'

const HeaderContainer = styled.div`
  height: ${COLLAPSED_HEADER_HEIGHT}px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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

const CollapsedHeader = ({ artist }) => {
  const headerOpacity = 0.5
  return (
    <HeaderContainer style={{ opacity: headerOpacity }}>
      <HeaderText>{artist}</HeaderText>
    </HeaderContainer>
  )
}
export default CollapsedHeader
