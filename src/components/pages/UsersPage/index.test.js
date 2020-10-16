import React from 'react'
import { shallow } from 'enzyme'
import { Themes } from 'themes'
import { UsersPage } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<UsersPage {...props} />)

jest.mock('utils', () => ({ CheckLoggedInn: () => true }))

it('should not render childrens', () => {
  const t = (text) => text
  const i18n = {
    changeLanguage: () => {},
  }
  const toggleTheme = () => {}
  const theme = Themes.default.dark
  const wrapper = wrap({
    t, i18n, toggleTheme, theme, idPage: 'UsersPage', children: 'teste',
  })
  expect(wrapper.find({
    children: 'test',
  })).toHaveLength(0)
})
