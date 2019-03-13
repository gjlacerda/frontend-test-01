import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Button from './Button'

describe('Button component', () => {
  it('deve ser igual ao snapshot', () => {
    const tree = renderer.create(
      <Button />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('deve ser igual ao snapshot quando passado o parâmetro (fullWidth)', () => {
    const tree = renderer.create(
      <Button fullWidth />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
