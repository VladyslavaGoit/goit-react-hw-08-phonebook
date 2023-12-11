import { useLocation } from 'react-router-dom';
import {
  ArrowIcon,
  Section,
  StyledLink,
  TextInfo,
  Wrapper,
} from './NotFound.styled';
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
            <ArrowIcon />
            <span>Back to Home</span>
          </StyledLink>
        </Wrapper>
      </Container>{' '}
    </Section>
  );
};
export default NotFound;
