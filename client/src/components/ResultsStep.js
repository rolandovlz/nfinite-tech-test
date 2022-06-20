import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  max-width: 100px;
`

const StyledResult = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`

export const ResultsStep = ({ results }) => {
  if (!results) return null
  const { data, errors } = results

  return (
    <>
      <table style={{ backgroundColor: '#dcdcdc', borderCollapse: 'collapse' }}>
        <tbody>
          {data &&
            data.map((item, idx) => {
              return (
                <tr key={`${item.id}-${idx}`} style={{ textAlign: 'center', border: '2px solid black' }}>
                  <td>
                    <StyledResult style={{ backgroundColor: '#90ee90' }}>ok</StyledResult>
                  </td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <StyledImg src={item.picture.url} />
                  </td>
                </tr>
              )
            })}
          {errors &&
            errors.map((error, idx) => {
              return (
                <tr key={`${error.id}-${idx}`} style={{ textAlign: 'center', border: '2px solid black' }}>
                  <td>
                    <StyledResult style={{ backgroundColor: '#ff8a8a' }}>ko</StyledResult>
                  </td>
                  <td>{error.id}</td>
                  <td>{error.message}</td>
                  <td></td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
}
