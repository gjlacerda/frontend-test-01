import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Link, HashRouter } from 'react-router-dom'
import Modal from 'components/_common/Modal'
import Trailer from 'pages/Home/Trailer'
import { colorApp } from 'utils/color'
import { marginSize } from 'utils/margin'
import { screenSm } from 'utils/screen'

const Container = styled.div`
  flex-basis: 100%;
  
  @media (min-width: ${screenSm}) {
    flex-basis: 50%;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${marginSize.medium};
  border: 1px solid ${colorApp};
  background-color: #000;
  padding: 4px;

  @media (min-width: ${screenSm}) {
    margin: ${marginSize.medium};
  }
`

const LinkItem = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  padding-bottom: 56.25%;
`

const openModal = (videoId) => {
  ReactDOM.render(
    <HashRouter>
      <Modal>
        <Trailer videoId={videoId} />
      </Modal>
    </HashRouter>,
    document.getElementById('modalContainer'),
  )
}

export default ({ image, videoId }) => (
  <Container>
    <Content onClick={() => openModal(videoId)}>
      <LinkItem
        to={`/home/${videoId}`}
        image={image}
      />
    </Content>
  </Container>
)
