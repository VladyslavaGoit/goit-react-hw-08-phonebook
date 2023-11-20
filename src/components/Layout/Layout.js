import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Wrapper>
  );
};
