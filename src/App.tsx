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

  return (
    <div className="App">
      <Wrapper>
        <Container>
          <Routes>
            {/* with navbar */}
            <Route path="/" element={<FilmsList />} />
            <Route path="/films/:id" element={<Film />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info" element={<Info />} />
            {/* routing for admin */}
            <Route path="/login" element={<LoginForm />} />
            <Route element={<PrivateWrapper />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
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
