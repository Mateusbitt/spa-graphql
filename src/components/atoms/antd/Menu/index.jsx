import React from 'react'
import { Menu as ADMenu } from 'antd'

const Menu = ({ ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ADMenu {...props} />
  )
}

export { Menu }
