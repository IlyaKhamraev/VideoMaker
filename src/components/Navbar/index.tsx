import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { NavItem } from "components/Navbar/Navitem";
import { paths } from "components/Navbar/constants";
import { Social } from "components/Social";
import { theme } from "variables";

export const Navbar = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Content>
        <Header>
          <Logo to="/">R. Raudsepp</Logo>
        </Header>
        <Navigation>
          <Routes>
            {paths.map((route) => (
              <NavItem
                {...route}
                key={route.name}
                active={location.pathname === route.path}
              />
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

export const Logo = styled(Link)`
  transition: 0.4s;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.ThunderExtraBoldlc}, sans-serif;
  font-size: ${theme.size.xl2}px;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
