/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import jwtDecode from 'jwt-decode'
import { UserOutlined } from '@ant-design/icons'
import { useQuery } from '@apollo/client'
import { Users as UsersQuery } from 'gql'
import { GenericLoggedPage, ADTable } from 'components'

const UsersPage = () => {
  const localStorageData = jwtDecode(localStorage.getItem('token'))
  const { id } = localStorageData.userData
  const { data, error, loading } = useQuery(UsersQuery, {
    variables: { id },
  })

  if (error) return null
  if (loading) return <div>Loading...</div>
  const [user] = data.Users
  if (!user) return null

  user.picture = (
    <UserOutlined size={64} />
  )

  const tableData = [{
    key: user.id,
    ...user,
  }]

  return (
    <GenericLoggedPage idPage="UsersPage">
      <ADTable tableData={tableData} />
    </GenericLoggedPage>
  )
}

export { UsersPage }
