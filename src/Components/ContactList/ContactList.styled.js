import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  margin-bottom: 10px;
  width: 500px;
`;
