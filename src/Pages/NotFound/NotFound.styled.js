import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const Section = styled.section`
  padding: 100px 0;
  background-color: ${p => p.theme.colors.primaryBckg};
`;
export const Wrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const TextInfo = styled.p`
  margin-bottom: 35px;

  font-family: 'Courier New', Courier, monospace;
  font-size: 32px;
  line-height: 1.7;
  color: ${p => p.theme.colors.titleText};
`;

export const StyledLink = styled(Link)`
  padding: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  color: ${p => p.theme.colors.titleText};
  box-shadow: 0px 2px 5px 0px ${p => p.theme.colors.secondBckg};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.primaryBckg};
    color: ${p => p.theme.colors.accentText};
    box-shadow: 0px 2px 5px 0px ${p => p.theme.colors.accentBckg};
  }
`;

export const ArrowIcon = styled(IoIosArrowRoundBack)`
  width: 35px;
  height: 35px;
`;
