import React from 'react'
import { shallow } from 'enzyme'
import { PageTemplate } from '.'

describe('PageTemplate', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<PageTemplate {...props}>Teste</PageTemplate>)
  it('should render pageTemplate', () => {
    const wrapper = wrap({
      idPage: 'pageTemplate',
      siderbar: <aside />,
      pageheader: <header />,
      breadcrumb: <footer />,
    })
    expect(wrapper.find({
      idPage: 'pageTemplate',
    })).toHaveLength(1)
  })
})
