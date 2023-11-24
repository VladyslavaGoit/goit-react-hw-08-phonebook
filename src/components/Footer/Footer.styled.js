import { FaLinkedin } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: black;
`;
export const StyledIconLn = styled(FaLinkedin)`
  fill: rosybrown;
  width: 25px;
  height: 25px;
  &:hover {
    fill: #f3baba;
  }
`;
export const StyledIconTelegram = styled(FaTelegram)`
  fill: rosybrown;
  width: 25px;
  height: 25px;
  &:hover {
    fill: #f3baba;
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
