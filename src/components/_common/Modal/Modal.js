import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import A from 'components/_common/A'
import { marginSize } from 'utils/margin'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`

const Content = styled.div`
  width: 925px;
  background-color: #000;
  margin: ${marginSize.medium};
`

const Close = styled(A)`
  position: absolute;
  top: ${marginSize.medium};
  right: ${marginSize.medium};
`

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  close = () => {
    // TODO: extrair para fora do componente
    const { history } = this.props
    history.replace('/home')

    ReactDOM.unmountComponentAtNode(document.getElementById('modalContainer'))
  }

  onEscDown = (event) => {
    if (event.keyCode !== 27) {
      return
    }
    this.close()
  }

  render() {
    const { children } = this.props
    return (
      <Container>
        <Close onClick={this.close}>
          Close
        </Close>
        <Content>
          {children}
        </Content>
      </Container>
    )
  }
}

export default withRouter(Modal)
