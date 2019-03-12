import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { marginSize } from 'utils/margin'
import TextField from 'components/_common/TextField'
import Button from 'components/_common/Button'
import Box from 'components/_common/Box'
import Logo from 'components/_common/Logo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: ${marginSize.medium} ${marginSize.large};
`

const Form = styled.form`
  max-width: 350px;
  width: 100%;
  text-align: center;
`

export default () => (
  <Container>
    <Logo />
    <Form>
      <Box marginBottom="small">
        <TextField label="Email" fullWidth focus />
      </Box>
      <Box marginBottom="large">
        <TextField label="Password" fullWidth />
      </Box>
      <Link to="/home">
        <Button>
          Login
        </Button>
      </Link>
    </Form>
  </Container>
)
