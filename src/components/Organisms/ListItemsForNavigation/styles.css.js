import styled from "styled-components"

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const FocusableList = styled.ul`
  list-style-type: none;
  flex-direction: "column";
  justify-content: space-around;
  outline: none;
`

const FocusableItem = styled.li`
  display: flex;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`

const Avatar = styled.img`
  height: 100px;
  border-radius: 0ch;
`

const FocusableContainer = styled.div`
  border: 1px solid;
  width: 100%;
  margin: 10px 0;
  border-color: ${(props) => (props.focused ? "white" : "gray")};
  color: ${(props) => (props.focused ? "white" : "black")};
  border-radius: 20px;
  display: flex;
  flex-direction: "column";
  justify-content: "space-between";
  background-color: ${(props) => (props.focused ? "gray" : "white")};
`
const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
`

const InfoSection = styled.div`
  padding: 20px;
  text-align: left;
  width: 50%;
`
const InfoList = styled.ol`
  list-style-type: none;
  & label {
    font-weight: bold;
  }
`
export {
  NavigationContainer,
  Avatar,
  FocusableList,
  FocusableItem,
  FocusableContainer,
  AvatarSection,
  InfoSection,
  InfoList,
}
