import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BsBookmarksFill } from 'react-icons/bs';
import { SlCallEnd } from 'react-icons/sl';

export const IconHome = styled(BsBookmarksFill)`
  padding: 2px;
  width: 20px;
  height: 20px;
`;

export const IconPhone = styled(SlCallEnd)`
  padding: 2px;
  width: 20px;
  height: 20px;
`;

export const NavWrap = styled.nav`
  display: flex;
  gap: 50px;
`;
export const StyledNavlink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 24px 0;
  color: ${p => p.theme.colors.primaryText};
  &:hover {
    & ${IconHome} {
      background-color: ${p => p.theme.colors.accentBckg};
      fill: ${p => p.theme.colors.accentIcon};
      border-radius: 4px;
    }
    & ${IconPhone} {
      background-color: ${p => p.theme.colors.accentBckg};
      fill: ${p => p.theme.colors.accentIcon};
      border-radius: 4px;
    }
  }
  &.active {
    & ${IconHome} {
      background-color: ${p => p.theme.colors.accentBckg};
      fill: ${p => p.theme.colors.accentIcon};
      border-radius: 4px;
    }
    & ${IconPhone} {
      background-color: ${p => p.theme.colors.accentBckg};
      fill: ${p => p.theme.colors.accentIcon};
      border-radius: 4px;
    }
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
      box-shadow: 0px 1px 2px 0px ${p => p.theme.colors.secondBckg};
    }
  }
`;
