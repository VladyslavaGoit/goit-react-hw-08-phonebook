import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  width: 100%;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${p => p.theme.colors.primaryText};

  @media screen and (max-width: ${p => p.theme.breakpoint}) {
    align-items: flex-end;
  }
`;
