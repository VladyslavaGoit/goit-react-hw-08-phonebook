import { Container } from 'Components/Container.styled';
import {
  Box,
  ContactList,
  StyledFooter,
  StyledIconLn,
  StyledIconTelegram,
  Text,
  Title,
  Wrapper,
} from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Box>
            <Title>Phonebook</Title>
            <Text>Adds your contacts</Text>
          </Box>
          <Box>
            <Text>by Vladyslava Dulembova</Text>
            <ContactList>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/dulembova-frontend-developer/"
                >
                  <StyledIconLn />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/Dulembova_Vlada"
                >
                  <StyledIconTelegram />
                </a>
              </li>
            </ContactList>
          </Box>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};
