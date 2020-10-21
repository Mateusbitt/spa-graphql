import React from 'react'
import { shallow } from 'enzyme'
import { Themes } from 'themes'
import { PageHeader } from '.'

jest.mock('jwt-decode', () => () => ({
  userData: {
    id: 'token',
  },
}))

jest.mock('@apollo/client', () => ({
  useQuery: () => ({
    loading: false,
    error: false,
    data: {
      Users: [{}],
    },
  }),
  gql: () => 'query',
}))

const mockDark = Themes.default.dark
jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useContext: () => mockDark,
  }
})

describe('PageHeader', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<PageHeader {...props}>Teste</PageHeader>)
  it('should render PageHeader', () => {
    const wrapper = wrap({
      toggle: () => { },
      toggleTheme: () => { },
      collapsed: true,
    })
    expect(wrapper.find({
      id: 'PageHeader',
    })).toHaveLength(1)
  })
})
