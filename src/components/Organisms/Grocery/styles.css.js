import styled from "styled-components"

const GroceryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const GroceryList = styled.ul`
  list-style-type: none;
  flex-direction: "column";
  justify-content: space-around;
  outline: none;
`

const GroceryListItem = styled.li``

export { GroceryContainer, GroceryList, GroceryListItem }
