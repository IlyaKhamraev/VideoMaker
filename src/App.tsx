import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { styled } from "styled-components";

import { Container } from "components/Container";
import { FilmsList } from "components/FilmsList";
import { Film } from "components/FilmsList/Film";
import { Dashboard } from "components/Dashboard";
import { Contact } from "components/Contanct";
import { LoginForm } from "components/Login";
import { Info } from "components/Info";
import { theme } from "variables";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const PrivateWrapper = () => {
    return isAuthenticated ? <Dashboard /> : <Navigate to="/login" />;
  };

  const components = [
    { path: "/", component: <FilmsList /> },
    { path: "/films/:id", component: <Film /> },
    { path: "/contact", component: <Contact /> },
    { path: "/info", component: <Info /> },
    { path: "/login", component: <LoginForm /> },
    {
      path: "",
      component: <PrivateWrapper />,
      children: [{ path: "/dashboard", component: <Dashboard /> }],
    },
  ];

  return (
    <div className="App">
      <Wrapper>
        <Container>
          <Routes>
            {components.map((route) => (
              <Route
                path={route.path}
                element={route.component}
                children={route.children?.map((routeChild) => (
                  <Route
                    path={routeChild.path}
                    element={routeChild.component}
                  />
                ))}
              />
            ))}
          </Routes>
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--black-color);

  @media (min-width: ${theme.breakpoints.sm}px) {
  }

  @media (min-width: ${theme.breakpoints.md}px) {
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
  }
`;
