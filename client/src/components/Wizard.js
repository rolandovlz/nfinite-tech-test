import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { ResultsStep } from './ResultsStep'
import { UploadStep } from './UploadStep'

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
  }

  &:disabled {
    border: 2px solid #dcdcdc;
    cursor: not-allowed;
  }
`

export const Wizard = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [results, setResults] = useState(null)

  const handleValidateFile = () => {
    if (!selectedFile || selectedFile?.type !== 'text/csv') return

    const formData = new FormData()
    formData.append('file', selectedFile)
    axios
      .post('http://localhost:5000/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(res => {
        setResults(res.data)
      })
  }

  return (
    <>
      <StyledButton disabled={!selectedFile || selectedFile?.type !== 'text/csv'} onClick={handleValidateFile}>
        Validate
      </StyledButton>
      <UploadStep selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
      <ResultsStep results={results} />
    </>
  )
}
