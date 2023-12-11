import { FaLinkedin } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${p => p.theme.colors.subTitleText};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: ${p => p.theme.colors.titleText};
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 0;
`;
export const Title = styled.h2`
  font-size: 28px;
`;
export const Text = styled.p`
  font-size: 22px;
`;
export const ContactList = styled.ul`
  display: flex;
  gap: 25px;
`;
export const StyledIconTelegram = styled(FaTelegram)`
  fill: ${p => p.theme.colors.titleText};
  width: 30px;
  height: 30px;
  &:hover {
    fill: ${p => p.theme.colors.secondBckg};
  }
`;
export const StyledIconLn = styled(FaLinkedin)`
  fill: ${p => p.theme.colors.titleText};
  width: 30px;
  height: 30px;
  &:hover {
    fill: ${p => p.theme.colors.secondBckg};
  }
`;
