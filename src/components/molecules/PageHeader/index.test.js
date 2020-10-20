import React from 'react'
import { shallow } from 'enzyme'
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

describe('PageHeader', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<PageHeader {...props}>Teste</PageHeader>)
  it('should render PageHeader', () => {
    const wrapper = wrap({
      toggle: () => {},
      collapsed: true,
    })
    expect(wrapper.find({
      id: 'PageHeader',
    })).toHaveLength(1)
  })
})
