import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

export const MenuContent = styled.div`
  display: none;
`;

export const MenuBox = styled.div`
  display: none;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    display: flex;
    justify-content: end;
  }

  &.active {
    ${MenuContent} {
      position: absolute;
      top: 60px;
      left: 0;
      display: block;
    }
  }
`;

export const ButtonMenu = styled.button`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  color: ${p => p.theme.colors.secondBckg};
  cursor: pointer;
  background-color: transparent;
`;

export const BurgerIcon = styled(RxHamburgerMenu)`
  height: 28px;
  width: 28px;
`;

export const CloseIcon = styled(IoCloseOutline)`
  height: 28px;
  width: 28px;
`;
