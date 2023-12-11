import styled from 'styled-components';
import { CgHello } from 'react-icons/cg';

export const UserIcon = styled(CgHello)`
  width: 25px;
  height: 25px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
`;

export const Text = styled.p`
  padding: 10px 15px;
  display: flex;
  gap: 10px;
  color: ${p => p.theme.colors.accentText};
  box-shadow: 0px 2px 3px 0px ${p => p.theme.colors.subTitleText};
  border-radius: 10px;
`;

export const Name = styled.span`
  color: ${p => p.theme.colors.primaryText};
`;
