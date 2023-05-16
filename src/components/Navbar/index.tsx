import { styled } from "styled-components";

import { Social } from "components/Social";
import { NavItem } from "components/Navbar/Navitem";
import { paths } from "components/Navbar/constants";
import { theme } from "variables";

export const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Logo href="/">R. Raudsepp</Logo>
        </Header>
        <Navigation>
          <Routes>
            {paths.map((route) => (
              <NavItem {...route} />
            ))}
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

export const Logo = styled.a`
  transition: 0.4s;
  color: ${theme.colors.white};
  font-family: "opensans_bold", sans-serif;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
