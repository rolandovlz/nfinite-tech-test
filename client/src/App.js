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

const StyledHeader = styled.header`
  margin-bottom: 2rem;
  background: #e8e8e8;
  width: 100%;
  text-align: center;
`

const App = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <h3>rolandovlz - tech test nfinite</h3>
      </StyledHeader>
      <Wizard />
    </Wrapper>
  )
}

export default App
