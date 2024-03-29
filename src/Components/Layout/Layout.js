import { AppBar } from 'Components/AppBar/AppBar';
import { Footer } from 'Components/Footer/Footer';
import { Loader } from 'Components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Wrapper>
  );
};
