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
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    align-items: center;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 0;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    max-width: 100px;
  }
`;
export const Title = styled.h2`
  font-size: 28px;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    font-size: 20px;
  }
`;
export const Text = styled.p`
  font-size: 22px;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    font-size: 16px;
  }
`;
export const ContactList = styled.ul`
  display: flex;
  gap: 25px;
`;
export const StyledIconTelegram = styled(FaTelegram)`
  fill: ${p => p.theme.colors.titleText};
  width: 30px;
  height: 30px;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    width: 20px;
    height: 25px;
  }
  &:hover {
    fill: ${p => p.theme.colors.secondBckg};
  }
`;
export const StyledIconLn = styled(FaLinkedin)`
  fill: ${p => p.theme.colors.titleText};
  width: 30px;
  height: 30px;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    width: 20px;
    height: 25px;
  }
  &:hover {
    fill: ${p => p.theme.colors.secondBckg};
  }
`;
