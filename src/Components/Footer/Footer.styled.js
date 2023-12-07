import { FaLinkedin } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(26, 24, 24, 1) 89%,
    rgba(31, 27, 27, 1) 100%
  );
`;
export const StyledIconLn = styled(FaLinkedin)`
  fill: rosybrown;
  width: 25px;
  height: 25px;
  &:hover {
    fill: ${p => p.theme.colors.accentText};
  }
`;
export const StyledIconTelegram = styled(FaTelegram)`
  fill: ${p => p.theme.colors.primaryText};
  width: 25px;
  height: 25px;
  &:hover {
    fill: ${p => p.theme.colors.accentText};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  color: rosybrown;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 0;
`;
export const ContactList = styled.ul`
  display: flex;
  gap: 10px;
`;
