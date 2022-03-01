import styled from 'styled-components';

const StyledStar = styled.span`
  color:${props=>props.active?'yellow':'gray'};
  height: 200px;
  &:hover {
    color: yellow;
    cursor: pointer;
  }

`;
export {
    StyledStar
}