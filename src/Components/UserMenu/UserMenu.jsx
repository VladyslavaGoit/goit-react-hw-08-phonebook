import { Button } from 'Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Name, Text, UserIcon, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(selectUser).name;
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Text>
        <UserIcon />
        Welcome
        <Name> {userName}</Name>
      </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
