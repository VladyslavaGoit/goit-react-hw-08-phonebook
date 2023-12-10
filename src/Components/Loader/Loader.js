import { Container } from 'Components/Container.styled';
import { BallTriangle } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Wrapper>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="rosybrown"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </Wrapper>
    </Container>
  );
};
