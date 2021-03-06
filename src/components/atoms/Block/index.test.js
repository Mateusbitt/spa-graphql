import React from 'react'
import { shallow } from 'enzyme'
import { Themes } from 'themes'
import { Block } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = (props = {}) => shallow(<Block {...props} />)

const mockDark = Themes.default.dark
jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useContext: () => mockDark,
  }
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
