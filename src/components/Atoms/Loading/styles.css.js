import styled from "styled-components"

const LoadingWrapper = styled.div`
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
`
export { LoadingWrapper, Dot }
