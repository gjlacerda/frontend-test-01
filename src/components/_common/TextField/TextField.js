import React, { Component } from 'react'
import styled from 'styled-components'
import { colorApp } from 'utils/color'
import { fontSize, fontWeight } from 'utils/font'


const Container = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 48px;

  &.selected label {
    top: 0;
    font-size: ${fontSize.small};
    transition: top 0.1s cubic-bezier(0, 0, 0.2, 1);
    transition-property: top, font-size;
  }
`

const Label = styled.label`
  position: absolute;
  top: 24px;
  left: 0;
  color: ${colorApp};
  pointer-events: none;
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.thin};
  transition: top 0.1s cubic-bezier(0, 0, 0.2, 1);
  transition-property: top, font-size;
`

const InputText = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${colorApp};
  color: #fff;
  outline: none;
  padding-bottom: 6px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`

class TextField extends Component {
  state = {}

  componentDidMount() {
    const { focus } = this.props
    if (focus) {
      this.input.focus()
    }
  }

  handleFocus = () => {
    this.setState({
      className: 'selected',
    })
  }

  handleBlur = (event) => {
    if (event.target.value) {
      return
    }
    this.setState({
      className: '',
    })
  }

  render() {
    const { label, fullWidth } = this.props

    return (
      <Container className={this.state.className}>
        <InputText
          type="text"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          fullWidth={fullWidth}
          ref={input => this.input = input}
        />
        <Label>
          {label}
        </Label>
      </Container>
    )
  }
}

export default TextField
