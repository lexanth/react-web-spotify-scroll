import React from 'react'
import styled from 'styled-components/macro'
import Cover from './Cover'
import CollapsedHeader from './CollapsedHeader'
import ShufflePlay from './ShufflePlay'
import Content from './Content'

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

const Album = ({ album }) => {
  return (
    <AlbumContainer>
      <Cover src={album.cover} />
      <CollapsedHeader artist={album.artist} />
      <ShufflePlay />
      <Content album={album} />
    </AlbumContainer>
  )
}
export default Album
