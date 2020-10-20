/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const ADDropdown = ({ title, items }) => {
  return (
    <Dropdown overlay={items} trigger={['click']}>
      <a href="#" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {title}
        {' '}
        <DownOutlined />
      </a>
    </Dropdown>
  )
}

ADDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.node.isRequired,
}

export { ADDropdown }
