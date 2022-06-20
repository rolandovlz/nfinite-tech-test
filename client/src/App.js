import React from 'react'
import styled from 'styled-components'
import { Wizard } from './components/Wizard'

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  return (
    <Wrapper>
      <Wizard />
    </Wrapper>
  )
}

export default App
