import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 400px;
  margin-bottom: 1.5rem;
  align-self: center;
  display: flex;
  min-height: 2rem;
  align-items: center;
  justify-content: space-evenly;
  border: 1px dotted black;
`
const StyledStep = styled.div`
  padding: 1rem;
  display: flex;
`

const StyledHighlight = styled.div`
  width: 1.5rem;
  text-align: center;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${props => (props.highlight ? '#ff8a8a' : '')};
`

export const WizardSteps = ({ currentStep }) => {
  return (
    <Wrapper>
      <StyledStep>
        <StyledHighlight highlight={currentStep === 1}>1</StyledHighlight> products
      </StyledStep>
      <StyledStep>
        <StyledHighlight highlight={currentStep === 2}>2</StyledHighlight> results
      </StyledStep>
    </Wrapper>
  )
}
