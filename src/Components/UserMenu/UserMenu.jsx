import { Button } from 'Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { LogOutIcon, Name, Text, UserIcon, Wrapper } from './UserMenu.styled';

export const UserMenu = ({ className }) => {
  const userName = useSelector(selectUser).name;
  const dispatch = useDispatch();
  return (
    <Wrapper className={className}>
      <Text>
        <UserIcon />
        Welcome
        <Name> {userName}</Name>
      </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <LogOutIcon />
        Logout
      </Button>
    </Wrapper>
  );
};
