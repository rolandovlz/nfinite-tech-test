import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { ResultsStep } from './ResultsStep'
import { UploadStep } from './UploadStep'
import { WizardSteps } from './WizardSteps'

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  transition: 200ms;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #dcdcdc;
  }

  &:disabled {
    border: 2px solid #dcdcdc;
    cursor: not-allowed;
  }
`

export const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedFile, setSelectedFile] = useState()
  const [results, setResults] = useState(null)
  const baseUrl = window.location.origin

  const handleValidateFile = () => {
    if (!selectedFile || selectedFile?.type !== 'text/csv') return

    const formData = new FormData()
    formData.append('file', selectedFile)
    axios
      .post(`${baseUrl}/upload`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(res => {
        setResults(res.data)
        setCurrentStep(2)
      })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {currentStep === 1 && (
        <>
          <StyledButton disabled={!selectedFile || selectedFile?.type !== 'text/csv'} onClick={handleValidateFile}>
            Validate
          </StyledButton>
          <WizardSteps currentStep={currentStep} />
          <UploadStep selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
        </>
      )}
      {currentStep === 2 && (
        <>
          <StyledButton onClick={() => setCurrentStep(1)}>Go Back</StyledButton>
          <WizardSteps currentStep={currentStep} />
          <ResultsStep results={results} />
        </>
      )}
    </div>
  )
}
