import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 35px;
`;
export const StyledNavlink = styled(NavLink)`
  padding: 24px 0;
  color: black;
  &:hover {
    color: rosybrown;
  }
`;
