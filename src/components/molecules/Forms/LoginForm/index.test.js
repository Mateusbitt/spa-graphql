import React from 'react'
import { shallow } from 'enzyme'
import { LoginForm } from '.'

describe('LoginForm', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<LoginForm {...props} />)
  it('should not render childrens', () => {
    const t = (text) => text
    const wrapper = wrap({
      t,
      onFinish: () => {},
      onFinishFailed: () => {},
      children: 'teste',
    })
    expect(wrapper.find({
      children: 'test',
    })).toHaveLength(0)
  })

  it('should render loginForm', () => {
    const t = (text) => text
    const wrapper = wrap({
      t,
      onFinish: () => {},
      onFinishFailed: () => {},
    })
    expect(wrapper.find({
      name: 'basic',
    })).toHaveLength(1)
  })
})
