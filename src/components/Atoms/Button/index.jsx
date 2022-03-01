import { StyledButton } from "./styles.css";

const Button = ({ children, ...buttonProps }) => {
    return (
      <StyledButton {...buttonProps}>
          {children}
      </StyledButton>
    );
  };
  export default Button;