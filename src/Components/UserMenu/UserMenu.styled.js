import styled from 'styled-components';
import { CgHello } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';

export const UserIcon = styled(CgHello)`
  width: 25px;
  height: 25px;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    display: none;
  }
`;

export const LogOutIcon = styled(CiLogout)`
  width: 25px;
  height: 25px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    flex-direction: column;
    align-items: start;
    gap: 3px;
    font-size: 18px;

    &.desktop {
      display: none;
    }

    & > button {
      gap: 10px;
      padding: 8px 0;
      box-shadow: none;
      background-color: transparent;
    }
  }
`;

export const Text = styled.p`
  padding: 10px 15px;
  display: flex;
  gap: 10px;
  color: ${p => p.theme.colors.accentText};
  box-shadow: 0px 2px 3px 0px ${p => p.theme.colors.subTitleText};
  border-radius: 10px;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    box-shadow: none;
    padding: 10px 0;
  }
`;

export const Name = styled.span`
  color: ${p => p.theme.colors.primaryText};
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    color: ${p => p.theme.colors.accentText};
  }
`;
