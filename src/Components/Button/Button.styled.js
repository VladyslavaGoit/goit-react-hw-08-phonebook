import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 32px;
  border-radius: 10px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: ${p => p.theme.colors.accentBckg};
  box-shadow: 0px 2px 3px 0px ${p => p.theme.colors.secondBckg};
  &:hover {
    background-color: ${p => p.theme.colors.primaryBckg};
    color: ${p => p.theme.colors.accentText};
  }
`;
