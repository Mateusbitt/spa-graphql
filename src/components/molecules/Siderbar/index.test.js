import React from 'react'
import { shallow } from 'enzyme'
import { Siderbar } from '.'

describe('Siderbar', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<Siderbar {...props}>Teste</Siderbar>)
  it('should render Siderbar', () => {
    const wrapper = wrap({
      idPage: 'Siderbar',
      collapsed: true,
    })
    expect(wrapper.find({
      idPage: 'Siderbar',
    })).toHaveLength(1)
  })
})
