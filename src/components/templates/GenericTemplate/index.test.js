import React from 'react'
import { shallow } from 'enzyme'
import { GenericTemplate } from '.'

describe('GenericTemplate', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<GenericTemplate {...props} />)
  it('should not render childrens', () => {
    const theme = {}
    const wrapper = wrap({
      children: 'teste', theme,
    })
    expect(wrapper.find({
      children: 'test',
    })).toHaveLength(0)
  })

  it('should render GenericTemplate', () => {
    const theme = {}
    const wrapper = wrap({
      theme, id: 'GenericTemplate',
    })
    expect(wrapper.find({
      id: 'GenericTemplate',
    })).toHaveLength(1)
  })
})
