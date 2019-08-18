import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div``

const AddButton = styled.div``

const RemoveButton = styled.div``

const Buttons = ({ onCreate, onRemove }: any) => {
  return (
    <ButtonContainer>
      <AddButton onClick={onCreate}>생성</AddButton>
      <RemoveButton onClick={onRemove}>제거</RemoveButton>
    </ButtonContainer>
  )
}

export default Buttons
