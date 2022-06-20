import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  margin-right: 1rem;
`

const StyledImg = styled.img`
  max-width: 100px;
`

export const ResultsStep = ({ results }) => {
  if (!results) return null
  const { data, errors } = results

  return (
    <>
      <table>
        {/* <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>name</th>
            <th>image</th>
          </tr>
        </thead> */}
        <tbody>
          {data &&
            data.map(item => {
              return (
                <tr key={item.id}>
                  <td>ok</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <StyledImg src={item.picture.url} />
                  </td>
                </tr>
              )
            })}
          {errors &&
            errors.map(error => {
              return (
                <tr key={error.id}>
                  <td>ko</td>
                  <td>{error.id}</td>
                  <td>{error.message}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
      {/* {data &&
        data.map(item => {
          return (
            <div>
              <StyledSpan>ok</StyledSpan>
              <StyledSpan>{item.id}</StyledSpan>
              <StyledSpan>{item.name}</StyledSpan>
              <StyledImg src={item.picture.url} />
            </div>
          )
        })}
      {errors &&
        errors.map(error => {
          return (
            <div>
              <StyledSpan>{error.id}</StyledSpan>
              <StyledSpan>{error.message}</StyledSpan>
            </div>
          )
        })} */}
    </>
  )
}
