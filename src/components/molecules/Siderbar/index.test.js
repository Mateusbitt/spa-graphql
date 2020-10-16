import React from 'react'
import { shallow } from 'enzyme'
import { Siderbar } from '.'

jest.mock('react-router-dom', () => ({ useHistory: () => ({ location: { pathname: '/users' } }) }))

describe('Siderbar', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<Siderbar {...props}>Teste</Siderbar>)
  it('should render Siderbar', () => {
    const wrapper = wrap({
      collapsed: true,
    })
    expect(wrapper.find({
      id: 'Sidebar',
    })).toHaveLength(1)
  })
})
