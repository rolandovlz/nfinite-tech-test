import React, { useRef } from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  display: flex;
  position: relative;
  align-self: center;
  width: 200px;
  height: 150px;
`

const StyledDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;

  transition: 500ms;
  border: 2px dashed black;
  border-radius: 10px;
`

const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`

export const UploadStep = ({ selectedFile, setSelectedFile }) => {
  const divRef = useRef()

  const handleFileChange = e => {
    divRef.current.style.backgroundColor = '#e8e8e8'
    setSelectedFile(e.target.files[0])
  }

  const handleDragEnter = () => {
    if (selectedFile) return
    divRef.current.style.backgroundColor = '#e8e8e8'
  }

  const handleDragLeave = () => {
    if (selectedFile) return
    divRef.current.style.backgroundColor = ''
  }

  return (
    <StyledLabel>
      <StyledDiv ref={divRef}>
        {selectedFile ? (
          selectedFile?.type === 'text/csv' ? (
            <>
              <span>{selectedFile.name}</span>
            </>
          ) : (
            <>
              <span>invalid file type</span>
            </>
          )
        ) : (
          <>
            <span>upload csv</span>
          </>
        )}
      </StyledDiv>
      <StyledInput
        type="file"
        onChange={handleFileChange}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      />
    </StyledLabel>
  )
}
