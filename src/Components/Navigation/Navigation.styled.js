import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 35px;
`;
export const StyledNavlink = styled(NavLink)`
  position: relative;
  padding: 24px 0;
  color: rosybrown;
  &:hover {
    color: #f3baba;
  }
  &.active {
    color: #f3baba;
    text-shadow: 1px 1px 2px rosybrown;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;

      display: block;
      width: 100%;
      height: 4px;

      background-color: #f3baba;
      border-radius: 2px;
      border: 1px solid black;
    }
  }
`;
