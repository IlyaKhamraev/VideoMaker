import { styled } from "styled-components";

import { Social } from "components/Social";

export const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Logo href="/">R. Raudsepp</Logo>
        </Header>
        <Navigation>
          <Routes>
            <RoutesItem>
              <RoutesItemLink href="#">films</RoutesItemLink>
            </RoutesItem>
            <RoutesItem>
              <RoutesItemLink href="#">photo</RoutesItemLink>
            </RoutesItem>
            <RoutesItem>
              <RoutesItemLink href="#">info</RoutesItemLink>
            </RoutesItem>
            <RoutesItem>
              <RoutesItemLink href="#">contact</RoutesItemLink>
            </RoutesItem>
          </Routes>
          <Social />
        </Navigation>
      </Content>
    </Wrapper>
  );
};

export const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  padding-bottom: 80px;
`;

export const Wrapper = styled.div`
  padding-left: 20px;
  background-color: transparent;

  position: sticky;
  left: 0;
  top: 0;
  display: inline-block;
  height: 100vh;
  padding-right: 70px;
`;

export const Navigation = styled.nav``;

export const Routes = styled.ul``;

export const RoutesItem = styled.li`
  margin-bottom: 8px;
`;

export const RoutesItemLink = styled.a`
  transition: 0.4s;
  color: var(--white-color);

  &:hover {
    color: var(--primary-color);
  }
`;

export const Logo = styled.a`
  transition: 0.4s;
  color: var(--white-color);

  &:hover {
    color: var(--primary-color);
  }
`;
