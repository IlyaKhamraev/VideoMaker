import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";

import { ProtectedRoute } from "components/ProtectedRoute";
import { PageNotFound } from "components/PageNotFound";
import { Container } from "components/Container";
import { FilmsList } from "components/FilmsList";
import { Film } from "components/FilmsList/Film";
import { Dashboard } from "components/Dashboard";
import { Contact } from "components/Contanct";
import { Login } from "components/Login";
import { Register } from "components/Register";
import { Info } from "components/Info";
import { theme } from "variables";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Wrapper>
        <Container>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute element={Dashboard} loggedIn={loggedIn} />
              }
            />
            <Route path="/" element={<FilmsList />} />
            <Route path="/film/:id" element={<Film />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
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
