import styled from "styled-components"

const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & button {
    margin: 20px;
  }
`

const List = styled.ul`
  list-style-type: none;
`
const ListTitle = styled(List)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const ListItem = styled.li``

const TeamListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const TeamListIndicator = styled.div`
  flex-direction: column;
  & div {
    text-align: center;
    height: 30px;
  }
`

export {
  TeamsContainer,
  ButtonsBar,
  List,
  ListTitle,
  ListItem,
  TeamListContainer,
  TeamListIndicator,
}
