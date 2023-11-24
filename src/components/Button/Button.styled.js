import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  width: 120px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: black;
  color: rosybrown;
  &:hover {
    background-color: white;
    color: #b28a8a;
  }
`;