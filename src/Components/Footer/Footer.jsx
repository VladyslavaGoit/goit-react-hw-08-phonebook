import { Container } from 'Components/Container.styled';
// import { FaLinkedin } from 'react-icons/fa';
import {
  Box,
  ContactList,
  StyledFooter,
  StyledIconLn,
  StyledIconTelegram,
  Wrapper,
} from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Box>
            <h2>Phonebook</h2>
            <p>Adds your contacts!</p>
          </Box>
          <Box>
            <p>by Vladyslava Dulembova</p>
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
