/* eslint-disable react/destructuring-assignment */
import React from 'react'
import PropTypes from 'prop-types'
import { Table, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Picture',
    dataIndex: 'picture',
    key: 'picture',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    ),
  },
]

const ADTable = ({ tableData }) => {
  return (
    <Table columns={columns} dataSource={tableData} />
  )
}

ADTable.propTypes = {
  tableData: PropTypes.array.isRequired,
}

export { ADTable }
