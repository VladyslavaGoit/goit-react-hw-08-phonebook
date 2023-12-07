import styled from 'styled-components';
import { IoIosPhonePortrait } from 'react-icons/io';

export const Section = styled.section`
  background-color: rosybrown;
  padding: 120px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 30px;
`;
export const StyledIcon = styled(IoIosPhonePortrait)`
  position: relative;
  width: 450px;
  height: 450px;
  fill: rgba(0, 0, 0, 0.8);
`;
