import React, { useState } from 'react'
import { Block, Row } from 'components'
import { gql, useQuery } from '@apollo/client'

const GET_BOOKS = gql`
  query Books($id: ID, $limit: Int, $offset: Int) {
    Books(
      id: $id
      pagination: {
        limit: $limit
        offset: $offset
      }
    )
    {
      id
      name
      year
      deleted
    }
  }
`

const App = () => {
  const [id, setId] = useState('')
  const [limit, setLimit] = useState(100)
  const [offset, setOffset] = useState(0)

  const { loading, error, data } = (
    useQuery(
      GET_BOOKS,
      {
        variables: {
          id,
          limit,
          offset,
        },
        pollInterval: 5000,
      },
    )
  )

  if (loading) return 'Loading...'
  if (error) return `Error! ${error}`

  return (
    <>
      <Block>
        {
          data.Books && (
            data.Books.map((book) => (
              <React.Fragment key={book.id}>
                <Row>{book.id}</Row>
                <Block>{book.name}</Block>
                <Block>{book.year}</Block>
              </React.Fragment>
            ))
          )
        }
      </Block>
      <Block>
        <form>
          <input type="text" value={id} onChange={(e) => setId(parseInt(e.target.value, 10))} />
          <input type="text" value={limit} onChange={(e) => setLimit(parseInt(e.target.value, 10))} />
          <input type="text" value={offset} onChange={(e) => setOffset(parseInt(e.target.value || 0, 10))} />
        </form>
      </Block>

    </>
  )
}

export default App
