import { Container } from 'Components/Container.styled';
import { Section, SubTitle, TextWrapper, Title } from './Home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <TextWrapper>
          <Title>Keep your contacts handy</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ex unde repellendus totam voluptatum, incidunt
          </SubTitle>
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default Home;
