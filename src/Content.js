import React from 'react'
import styled from 'styled-components/macro'
import TrackItem from './TrackItem'
import ExpandedHeader from './ExpandedHeader'

const TracksContainer = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Tracks = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  padding-top: 32px;
`

const Content = ({ album }) => {
  return (
    <TracksContainer>
      <ExpandedHeader artist={album.artist} />
      <Tracks>
        {album.tracks.map((track, index) => (
          <TrackItem
            key={index}
            index={index + 1}
            track={track}
            artist={album.artist}
          />
        ))}
      </Tracks>
    </TracksContainer>
  )
}
export default Content
