import React from 'react'
import styled from 'styled-components/macro'
import { useSpring } from 'react-spring'
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
  const [{ y }, setY] = useSpring(() => ({ y: 0, immediate: true }))
  return (
    <AlbumContainer>
      <Cover src={album.cover} y={y} />
      <CollapsedHeader artist={album.artist} y={y} />
      <ShufflePlay y={y} />
      <Content album={album} y={y} setY={setY} />
    </AlbumContainer>
  )
}
export default Album
