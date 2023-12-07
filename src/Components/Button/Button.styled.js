import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  width: 150px;
  border-radius: 10px;
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
