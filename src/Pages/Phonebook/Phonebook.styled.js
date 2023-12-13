import styled from 'styled-components';

export const Section = styled.section`
  padding: 150px 0 50px 0;
  background-color: ${p => p.theme.colors.primaryBckg};

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    padding-top: 170px;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 25px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 0.06em;
  color: ${p => p.theme.colors.subTitleText};
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    font-size: 28px;
  }
`;

export const RequestInfo = styled.p`
  margin-bottom: 30px;
`;
