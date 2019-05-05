import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorMessage = styled.h3`
  font-size: 30px;
  color: ${props => props.theme.colors.primary};
`

const Error = ({message}) => {
  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  )
}

export default Error