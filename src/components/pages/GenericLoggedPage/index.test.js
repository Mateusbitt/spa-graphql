import React from 'react'
import { shallow } from 'enzyme'
import { GenericLoggedPage } from '.'

jest.mock('utils', () => ({ CheckLoggedInn: () => true }))

describe('GenericLoggedPage', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrap = ({ ...props }) => shallow(<GenericLoggedPage {...props}>Teste</GenericLoggedPage>)
  it('should render GenericLoggedPage', () => {
    const wrapper = wrap({
      idPage: 'GenericLoggedPage',
      children: {},
    })
    expect(wrapper.find({
      idPage: 'GenericLoggedPage',
    })).toHaveLength(1)
  })
})
