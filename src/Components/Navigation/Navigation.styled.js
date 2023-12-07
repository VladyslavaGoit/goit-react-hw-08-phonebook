import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 35px;
`;
export const StyledNavlink = styled(NavLink)`
  position: relative;
  padding: 24px 0;
  color: ${p => p.theme.colors.primaryText};
  &:hover {
    color: ${p => p.theme.colors.accentText};
  }
  &.active {
    color: ${p => p.theme.colors.accentText};
    text-shadow: 1px 1px 2px ${p => p.theme.colors.primaryText};
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;

      display: block;
      width: 100%;
      height: 4px;

      background-color: ${p => p.theme.colors.accentText};
      border-radius: 2px;
      box-shadow: 0px 1px 5px 0px ${p => p.theme.colors.secondBckg};
    }
  }
`;
