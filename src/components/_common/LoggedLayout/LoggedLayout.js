import React from 'react'
import styled from 'styled-components'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import { marginSize } from 'utils/margin'
import { screenMd } from 'utils/screen'

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
`

const Content = styled.div`
  flex: auto;
  margin: ${marginSize.large} ${marginSize.small} 100px ${marginSize.small};

  @media (min-width: ${screenMd}) {
    margin: ${marginSize.large};
  }
`

export default ({ children }) => (
  <Container>
    <Sidebar />
    <Content>
      {children}
    </Content>
    <Navbar />
  </Container>
)
