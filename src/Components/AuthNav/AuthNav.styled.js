import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SiGnuprivacyguard } from 'react-icons/si';
import { IoIosExit } from 'react-icons/io';

export const Wrapper = styled.div`
  display: flex;
  gap: 55px;
`;

export const SignUpIcon = styled(SiGnuprivacyguard)`
  padding: 2px;
`;

export const SignInIcon = styled(IoIosExit)`
  padding: 2px;
`;

export const StyledNavlink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 24px 0;
  color: ${p => p.theme.colors.primaryText};
  &:hover {
    color: ${p => p.theme.colors.accentText};
    & ${SignUpIcon} {
      background-color: ${p => p.theme.colors.accentBckg};
      fill: ${p => p.theme.colors.accentIcon};
      border-radius: 4px;
    }
    & ${SignInIcon} {
      background-color: ${p => p.theme.colors.accentBckg};
      fill: ${p => p.theme.colors.accentIcon};
      border-radius: 4px;
    }
  }

  &.active {
    color: ${p => p.theme.colors.accentText};
    text-shadow: 1px 1px 2px rosybrown;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;

      display: block;
      width: 110%;
      height: 4px;

      background-color: ${p => p.theme.colors.accentText};
      border-radius: 2px;
      box-shadow: 0px 1px 5px 0px ${p => p.theme.colors.secondBckg};
    }
  }
`;
