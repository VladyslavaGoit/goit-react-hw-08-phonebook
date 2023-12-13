import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 85px;
  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    padding: 0 35px;
  }
`;
