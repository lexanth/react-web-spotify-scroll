import React from 'react'
import styled from 'styled-components/macro'
import TrackItem from './TrackItem'
import ExpandedHeader from './ExpandedHeader'
import { useScroll } from 'react-use-gesture'
import { animated } from 'react-spring'

const TracksContainer = styled(animated.div)`
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

const Content = ({ album, y, setY }) => {
  const bind = useScroll(({ xy }) => {
    setY({ y: xy[1] })
  })

  return (
    <TracksContainer {...bind()}>
      <ExpandedHeader artist={album.artist} y={y} />
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
