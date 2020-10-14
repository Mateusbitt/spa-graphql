import React from 'react'
import { Menu as ADMenu } from 'antd'

const MenuItem = ({ ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ADMenu.Item {...props} />
  )
}

export { MenuItem }
