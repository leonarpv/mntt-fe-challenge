
import {StyledStar}from './styles.css';

const Star = ({ onClick, content }) => (
    <StyledStar onClick={onClick}>
      {content}
    </StyledStar>
  );

export default Star;