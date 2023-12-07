import { useLocation } from 'react-router-dom';
import { Section, StyledLink, TextInfo, Wrapper } from './NotFound.styled';
import { HiArrowLeft } from 'react-icons/hi';
import { Container } from 'Components/Container.styled';

const NotFound = () => {
  const location = useLocation();
  return (
    <Section>
      {' '}
      <Container>
        <Wrapper>
          <TextInfo>
            The requested url: {location.pathname} <br /> was not found on this
            server <br /> <br /> ༼ つ ◕_◕ ༽つ
          </TextInfo>
          <StyledLink to="/">
            <HiArrowLeft size={20} /> <span>Back to Home</span>
          </StyledLink>
        </Wrapper>
      </Container>{' '}
    </Section>
  );
};
export default NotFound;
