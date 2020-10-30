/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import jwtDecode from 'jwt-decode'
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'
import { useQuery } from '@apollo/client'
import { Users as UsersQuery } from 'gql'
import {
  GenericLoggedPage,
  ADTable,
  ADInput,
  ADButton,
  ADModal,
  ADFormItem,
  ADInputPassword,
  Block,
  ADUploadImage,
} from 'components'

const UsersPage = () => {
  const [modalTitle, setModalTitle] = useState('')
  const [modalText, setModalText] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const localStorageData = jwtDecode(localStorage.getItem('token'))
  const { id } = localStorageData.userData
  const { data, error, loading } = useQuery(UsersQuery, {
    variables: { id },
  })

  if (error) return null
  if (loading) return <div>Loading...</div>
  const [user] = data.Users
  if (!user) return null

  const StyledBlock = styled(Block)`
  display: flex;
  justify-content: center;
  flex-direction: column;  
  
  background: #ffffff;
  
  #register{
    display: flex;
    justify-content: center;
    color: #FFF;
  }

  #msg{
    text-align: center;
    padding-bottom: 10px;
  }

  .ant-form-item-label{
    width: 150px;
    text-align: start;
  }

  .bsiAVV .ant-form-item-label > label {
    color: black;
  }
`

  user.picture = (
    <UserOutlined size={64} />
  )

  const tableData = [{
    key: user.id,
    ...user,
  }]

  const registrationForm = (
    <>
      <StyledBlock>
        <ADFormItem
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <ADInput className="teste" placeholder="Your full name" />

        </ADFormItem>

        <ADFormItem
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Please input your E-mail!' }]}
        >
          <ADInput className="teste" placeholder="Your email" />

        </ADFormItem>

        <ADFormItem
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <ADInput placeholder="Choose your user" />
        </ADFormItem>

        <ADFormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <ADInputPassword placeholder="Choose your password" />
        </ADFormItem>

        <ADFormItem
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <ADInputPassword placeholder="Confirm your password" />
        </ADFormItem>

        <ADFormItem
          label="Your Picture"
          name="picture"
          rules={[{ required: true, message: 'Please send your image!' }]}
        >
          <ADUploadImage />
        </ADFormItem>
      </StyledBlock>
    </>
  )

  const handleVisibility = () => {
    setModalTitle('Register')
    setModalText(registrationForm)
    setModalVisible(true)
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setModalVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setModalVisible(false)
  }

  return (
    <GenericLoggedPage idPage="UsersPage">
      <ADTable tableData={tableData} />
      <ADButton onClick={handleVisibility}>
        Register
      </ADButton>
      {
        modalVisible
          ? (
            <ADModal
              title={modalTitle}
              modalText={modalText}
              visible={modalVisible}
              confirmLoading={confirmLoading}
              onOk={handleOk}
              onCancel={handleCancel}
            />
          )
          : null
      }
    </GenericLoggedPage>
  )
}

export { UsersPage }
