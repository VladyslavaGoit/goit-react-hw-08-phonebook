import { BallTriangle } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <BallTriangle
        height={70}
        width={70}
        radius={5}
        color="#F3C653"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Wrapper>
  );
};
