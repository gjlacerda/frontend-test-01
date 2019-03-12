import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { screenMd } from 'utils/screen'
import { colorApp } from 'utils/color'

const iconSize = '30px'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 44px;
  background-color: #151515;
  border-top: 1px solid #272727;

  @media (min-width: ${screenMd}) {
    display: none;
  }
`

const Icon = styled.svg`
  width: ${iconSize};
  height: ${iconSize};
  cursor: pointer;

  &.active {
    fill: ${colorApp};
  }
`

const getClassByUrl = module => window.location.href.includes(module) ? 'active' : ''

export default () => (
  <Container>
    <Link to="/home">
      <Icon className={getClassByUrl('home')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ccc">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </Icon>
    </Link>
    <Link to="/user">
      <Icon className={getClassByUrl('user')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ccc">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </Icon>
    </Link>
  </Container>
)
