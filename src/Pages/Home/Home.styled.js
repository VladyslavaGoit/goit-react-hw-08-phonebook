import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const Section = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding: 180px 0;
  background-color: ${p => p.theme.colors.primaryBckg};
`;
export const TextWrapper = styled.div`
  display: block;
  margin: auto 0;
  width: 400px;

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    max-width: 100%;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 0.06em;
  color: ${p => p.theme.colors.subTitleText};

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    margin-bottom: 20px;
    font-size: 22px;
  }
`;
export const Title = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 64px;
  margin-bottom: 25px;
  color: ${p => p.theme.colors.titleText};

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.06em;
  color: #7a7a7a;
`;

export const StyledLink = styled(Link)`
  margin-top: 40px;
  margin-left: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.colors.accentText};
  box-shadow: 0px 2px 3px 0px ${p => p.theme.colors.secondBckg};

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    margin-right: auto;
    margin-left: auto;
  }

  &:hover {
    background-color: ${p => p.theme.colors.subTitleText};
    color: ${p => p.theme.colors.titleText};
  }
`;
export const ArrowIcon = styled(IoIosArrowRoundForward)`
  width: 35px;
  height: 35px;
`;
