import { AppBar } from 'Components/AppBar/AppBar';
import { Footer } from 'Components/Footer/Footer';
import { LoadBox } from './Refreshing.styled';

export const Refreshing = () => {
  return (
    <>
      <AppBar />
      <LoadBox>Loading...</LoadBox>
      <Footer />
    </>
  );
};
