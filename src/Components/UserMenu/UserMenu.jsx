import { Button } from 'Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(selectUser).name;
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <p>Welcome {userName}!</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
