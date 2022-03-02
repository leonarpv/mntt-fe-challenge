import styled from "styled-components"

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  & div {
    flex-basis: 25%;
  }
  & span {
    &.name {
      flex-basis: 50%;
      text-align: left;
    }
    &.votes {
      flex-basis: 25%;
      text-align: center;
    }
  }
`

export { ProductContainer }
