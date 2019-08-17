import React from 'react'
import styled from 'styled-components/macro'
const Cell = styled.div`
  display: flex;
  padding: 16px;
`
const TrackItemContainer = styled.div`
  display: flex;
`
const TrackDetails = styled(Cell)`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const TrackIndex = styled(Cell)`
  align-items: center;
`
const TrackDetail = styled.span`
  ${props => props.bold && 'font-weight: bold'};
  text-align: left;
`
const TrackItem = ({ index, track, artist }) => (
  <TrackItemContainer>
    <TrackIndex>{index}</TrackIndex>
    <TrackDetails>
      <TrackDetail bold>{track.name}</TrackDetail>
      <TrackDetail>{track.artist || artist}</TrackDetail>
    </TrackDetails>
  </TrackItemContainer>
)

export default TrackItem
