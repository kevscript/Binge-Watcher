import React from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: 80px;
`

const PrimaryButton = styled.button`
  cursor: pointer;
  display: block;
  padding: 8px 20px;
  border: 1px solid #f4f4f4;
  border-radius: 15px;
  background-color: transparent;
  font-family: 'Source Sans Pro', 'Roboto', sans-serif;
  transition: 0.3s;

  :disabled {
    opacity: 0.5;
    color: transparent;
  }

  :hover:enabled {
    border: 1px solid rgba(0,0,0,0.2);
  }
`

const Pagination = ({ fetchData, page, totalPages}) => {

  return (
    <PaginationContainer>
      <PrimaryButton 
        onClick={() => fetchData(page - 1)}
        disabled={page === 1 ? true : false}
      >
        {`page ${page - 1}`}
      </PrimaryButton>
      {page} / {totalPages}
      <PrimaryButton 
        onClick={() => fetchData(page + 1)}
        disabled={page === totalPages ? true : false}
      >
        {`page ${page + 1}`}
      </PrimaryButton>
    </PaginationContainer>
  )
}

export default Pagination