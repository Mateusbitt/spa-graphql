import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '.'

describe('LoginPage', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<LoginPage {...props} />)

  it('should not render childrens', () => {
    const wrapper = wrap({
      theme: {},
      idPage: 'loginPage',
      children: 'teste',
    })
    expect(wrapper.find({
      children: 'teste',
    })).toHaveLength(0)
  })

  it('should render loginPage', () => {
    const wrapper = wrap({
      theme: {},
      idPage: 'loginPage',
    })
    expect(wrapper.find({
      idPage: 'loginPage',
    })).toHaveLength(1)
  })
})
