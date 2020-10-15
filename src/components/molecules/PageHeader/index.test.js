import React from 'react'
import { shallow } from 'enzyme'
import { PageHeader } from '.'

describe('PageHeader', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<PageHeader {...props}>Teste</PageHeader>)
  it('should render PageHeader', () => {
    const wrapper = wrap({
      idPage: 'PageHeader',
      toggle: () => {},
      collapsed: true,
    })
    expect(wrapper.find({
      idPage: 'PageHeader',
    })).toHaveLength(1)
  })
})
