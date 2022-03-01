import styled from 'styled-components';

const StyledStar = styled.span`
  color: hsl(0, 100%, 80%);
  &:hover {
    cursor: pointer;
  }
  ${props=>props.active?'':''}
`;
export {
    StyledStar
}