import { Container } from 'Components/Container.styled';
import {
  ArrowIcon,
  Section,
  StyledLink,
  SubTitle,
  Text,
  TextWrapper,
  Title,
} from './Home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <TextWrapper>
          <SubTitle>Keep your contacts handy</SubTitle>
          <Title>Phonebook</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ex unde repellendus totam voluptatum, incidunt
          </Text>
          <StyledLink to="/contacts">
            My Contacts <ArrowIcon />
          </StyledLink>
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default Home;
