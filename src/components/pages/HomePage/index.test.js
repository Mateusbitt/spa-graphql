import React from 'react'
import { shallow } from 'enzyme'
import { Themes } from 'themes'
import { HomePage } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<HomePage {...props} />)

jest.mock('utils', () => ({ CheckLoggedInn: () => true }))

it('should not render childrens', () => {
  const t = (text) => text
  const i18n = {
    changeLanguage: () => {},
  }
  const toggleTheme = () => {}
  const theme = Themes.default.dark
  const wrapper = wrap({
    t, i18n, toggleTheme, theme, idPage: 'homePage', children: 'teste',
  })
  expect(wrapper.find({
    children: 'test',
  })).toHaveLength(0)
})

it('should render homePage', () => {
  const t = (text) => text
  const i18n = {
    changeLanguage: () => {},
  }
  const toggleTheme = () => {}
  const theme = Themes.default.dark
  const wrapper = wrap({
    t, i18n, toggleTheme, theme, idPage: 'homePage',
  })
  expect(wrapper.find({
    idPage: 'homePage',
  })).toHaveLength(1)
})
