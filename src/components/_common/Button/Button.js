import React from 'react'
import styled from 'styled-components'
import { colorApp, colorAppDark } from 'utils/color'

const Button = styled.button`
  border: 1px solid ${colorApp};
  background: none;
  color: ${colorApp};
  padding: 10px 30px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
  transition-property: color, background-color;

  &:hover {
    background-color: ${colorApp};
    color: #fff;
  }

  &:active {
    background-color: ${colorAppDark};
  }
`

export default ({
  fullWidth,
  type,
  onClick,
  disabled,
  children,
}) => (
  <Button
    fullWidth={fullWidth}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
)
