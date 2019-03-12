import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from 'components/_common/Logo'
import Button from 'components/_common/Button'
import { marginSize } from 'utils/margin'
import { screenMd } from 'utils/screen'

const sidebarWidth = '420px'

const Container = styled.div`
  display: none;
  width: ${sidebarWidth};
  flex-shrink: 0;

  @media (min-width: ${screenMd}) {
    display: block;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 65px 0 65px;
  position: fixed;
  width: ${sidebarWidth};
  height: 100vh;
  border-right: 1px solid #666;
`

const LogoWrapper = styled.div`
  margin-bottom: 120px;
`

const A = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: ${marginSize.medium};

  &:hover {
    text-decoration: underline;
  }
`

export default () => (
  <Container>
    <Content>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Button fullWidth>
        Trailers
      </Button>
      <A to="/">Logout</A>
    </Content>
  </Container>
)
