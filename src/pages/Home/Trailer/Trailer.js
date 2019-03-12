import React from 'react'
import styled from 'styled-components'
import { colorApp } from 'utils/color'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Border = styled.div`
  border: 1px solid ${colorApp};
`

export default ({ videoId }) => (
  <Border>
    <Container>
      <iframe
        title="Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="video"
      />
    </Container>
  </Border>
)
