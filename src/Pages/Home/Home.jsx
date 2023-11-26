import { Container } from 'Components/Container.styled';
import { Section, SubTitle, Title } from './Home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <Title>Your Phonebook</Title>
        <SubTitle>Keep your contacts handy!</SubTitle>
      </Container>
    </Section>
  );
};

export default Home;
