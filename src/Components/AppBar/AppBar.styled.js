import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  width: 100%;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${p => p.theme.colors.primaryText};
`;