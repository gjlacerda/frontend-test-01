import React from 'react'
import { Link } from 'react-router-dom'
import LoggedLayout from 'components/_common/LoggedLayout'
import styled from 'styled-components'

const A = styled(Link)`
  color: #fff;
`

export default () => (
  <LoggedLayout>
    <A to="/login">Logout</A>
  </LoggedLayout>
)
