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
  color: rosybrown;
  &:hover:not(:active) {
    color: #f3baba;
    & ${SignUpIcon} {
      background-color: rgba(255, 169, 169, 0.8);
      fill: black;
      border-radius: 4px;
    }
    & ${SignInIcon} {
      background-color: rgba(255, 169, 169, 0.8);
      fill: black;
      border-radius: 4px;
    }
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
