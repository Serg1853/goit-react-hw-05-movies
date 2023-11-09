import { Suspense } from 'react';
import { HeaderStyled, NavStyled, StyledNavLink } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <NavStyled>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </NavStyled>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </HeaderStyled>
    </>
  );
};
