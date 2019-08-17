import React from 'react'
import Album from './Album'
import styled from 'styled-components/macro'

const album = {
  name: 'Remote Control',
  artist: 'Jan Blomqvist',
  release: 2016,
  // eslint-disable-next-line global-require
  cover: require('./assets/Jan-Blomqvist.jpg'),
  tracks: [
    { name: 'Stories Over' },
    { name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis' },
    { name: 'Empty Floor' },
    { name: 'Her Great Escape' },
    { name: 'Dark Noise' },
    { name: 'Drift', artist: 'Jan Blomqvist, Aparde' },
    { name: 'Same Mistake' },
    {
      name: 'Dancing People Are Never Wrong',
      artist: 'Jan Blomqvist, The Bianca Story',
    },
    { name: 'Back in the Taxi' },
    { name: 'Ghosttrack' },
    { name: 'Just OK' },
    { name: 'The End' },
  ],
}

const AppContainer = styled.div`
  text-align: center;
  background: black;
  color: #fff;
  height: 100%;
}
`

function App() {
  return (
    <AppContainer>
      <Album album={album} />
    </AppContainer>
  )
}

export default App
