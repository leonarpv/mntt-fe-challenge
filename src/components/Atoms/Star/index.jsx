
import {StyledStar}from './styles.css';

const Star = ({ onClick, content, active }) => (
    <StyledStar onClick={onClick} active={active} >
      {content}
    </StyledStar>
  );

export default Star;