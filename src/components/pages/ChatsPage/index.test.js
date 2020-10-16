import React from 'react'
import { shallow } from 'enzyme'
import { Themes } from 'themes'
import { ChatsPage } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<ChatsPage {...props} />)

jest.mock('utils', () => ({ CheckLoggedInn: () => true }))

it('should not render childrens', () => {
  const t = (text) => text
  const i18n = {
    changeLanguage: () => {},
  }
  const toggleTheme = () => {}
  const theme = Themes.default.dark
  const wrapper = wrap({
    t, i18n, toggleTheme, theme, idPage: 'ChatsPage', children: 'teste',
  })
  expect(wrapper.find({
    children: 'test',
  })).toHaveLength(0)
})
