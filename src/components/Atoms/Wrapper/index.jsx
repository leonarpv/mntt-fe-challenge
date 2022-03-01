import { StyledWrapper } from "./styles.css"

const Wrapper = ({ title, children }) => {
  return (
    <StyledWrapper>
      <h3>{title}</h3>
      {children}
    </StyledWrapper>
  )
}
export default Wrapper
