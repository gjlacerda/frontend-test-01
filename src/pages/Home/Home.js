import React from 'react'
import TrailerContainer from 'pages/Home/TrailerContainer'
import LoggedLayout from 'components/_common/LoggedLayout'

export default () => (
  <LoggedLayout>
    <TrailerContainer />
    <div id="modalContainer" />
  </LoggedLayout>
)
