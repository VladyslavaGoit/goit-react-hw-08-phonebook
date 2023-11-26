import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const TextInfo = styled.p`
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 1.7;
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 190px;
  background-color: black;
  color: rosybrown;
  &:hover {
    background-color: white;
    color: #b28a8a;
  }
`;
