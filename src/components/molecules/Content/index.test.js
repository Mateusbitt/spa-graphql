import React from 'react'
import { shallow } from 'enzyme'
import { Content } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<Content {...props} />)

it('should not render childrens', () => {
  const t = (text) => text
  const i18n = {
    changeLanguage: () => {},
  }
  const toggleTheme = () => {}
  // const theme = Themes.default.dark
  const wrapper = wrap({
    t, i18n, toggleTheme, children: 'teste',
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
  const wrapper = wrap({
    t, i18n, toggleTheme,
  })
  expect(wrapper.find({
    id: 'Content',
  })).toHaveLength(1)
})

it('should translate', () => {
  const t = () => 'test'
  const i18n = {
    changeLanguage: () => {},
  }
  const toggleTheme = () => {}
  const wrapper = wrap({
    t, i18n, toggleTheme,
  })
  expect(
    wrapper
      .find({
        id: 'Content',
      })
      .find({ id: 'home' })
      .contains('test'),
  ).toBe(true)
})
