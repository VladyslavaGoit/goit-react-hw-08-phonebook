import { Container } from 'Components/Container.styled';
import { Section, SubTitle, TextWrapper, Title } from './Home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <TextWrapper>
          <Title>Keep your contacts handy</Title>
          <SubTitle>
            User-friendly phone book app for effortless contact management.
          </SubTitle>
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default Home;
