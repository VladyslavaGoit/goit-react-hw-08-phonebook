import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.primaryBckg};
  padding: 120px 20px;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    padding-top: 200px;
  }
`;
