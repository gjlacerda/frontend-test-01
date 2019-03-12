import React from 'react'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { colorWhite } from 'utils/color'
import { fontWeight, fontSize } from 'utils/font'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300');

  body {
    position: relative;
    font-family: Roboto;
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.normal};
    color: ${colorWhite};
    background: url(assets/background.png) no-repeat center center fixed;
    background-size: cover;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: -1;
    }
  }

  * {
    box-sizing: border-box;
  }
`

export default ({ children }) => (
  <React.Fragment>
    <Normalize />
    <GlobalStyle />
    {children}
  </React.Fragment>
)
