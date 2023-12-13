import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 50px;
  background-color: ${p => p.theme.colors.primaryBckg};
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    padding-top: 125px;
  }
`;
