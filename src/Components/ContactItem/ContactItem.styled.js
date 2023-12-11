import styled from 'styled-components';

export const ItemWrap = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  box-shadow: 0 4px 6px -6px ${p => p.theme.colors.secondBckg};
  & > button {
    font-size: 18px;
    width: 85px;
    padding: 10px 15px;
  }
`;

export const BoxContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const Text = styled.p`
  display: flex;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  color: ${p => p.theme.colors.subTitleText};
`;

export const ContactLink = styled.a`
  color: ${p => p.theme.colors.secondaryText};
`;
