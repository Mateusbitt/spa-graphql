import React from 'react'
import { shallow } from 'enzyme'
import { Themes } from 'themes'
import { Siderbar } from '.'

jest.mock('react-router-dom', () => ({ useHistory: () => ({ location: { pathname: '/users' } }) }))

const mockDark = Themes.default.dark
jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useContext: () => mockDark,
  }
})

describe('Siderbar', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<Siderbar {...props}>Teste</Siderbar>)
  it('should render Siderbar', () => {
    const wrapper = wrap({
      collapsed: true,
      toggleTheme: () => { },
    })
    expect(wrapper.find({
      id: 'Sidebar',
    })).toHaveLength(1)
  })
})
