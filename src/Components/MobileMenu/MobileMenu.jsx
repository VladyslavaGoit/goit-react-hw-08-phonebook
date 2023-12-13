import { AuthNav } from 'Components/AuthNav/AuthNav';
import { UserMenu } from 'Components/UserMenu/UserMenu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  BurgerIcon,
  ButtonMenu,
  CloseIcon,
  MenuBox,
  MenuContent,
} from './MobileMenu.styled';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <MenuBox className={isOpen ? 'active' : ''}>
      <ButtonMenu onClick={handleToggleMenu}>
        {isOpen ? <CloseIcon /> : <BurgerIcon />}
      </ButtonMenu>
      <MenuContent>{isLoggedIn ? <UserMenu /> : <AuthNav />}</MenuContent>
    </MenuBox>
  );
};
