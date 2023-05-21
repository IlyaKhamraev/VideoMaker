import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";

import { Container } from "components/Container";
import { FilmsList } from "components/FilmsList";
import { Film } from "components/FilmsList/Film";
import { Contact } from "components/Contanct";
import { Navbar } from "components/Navbar";
import { theme } from "variables";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Container>
          <>
            <Navbar />
            <Content>
              <AlignBlock>
                <Routes>
                  <Route path="/" element={<FilmsList />} />
                  <Route path="/services" element={<FilmsList />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/films/:id" element={<Film />} />
                </Routes>
              </AlignBlock>
            </Content>
          </>
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

const Content = styled.div`
  display: flex;
  width: 764px;
  padding-top: 6vw;
  padding-bottom: 6vw;
  align-items: center;
  flex: 0 0 auto;
`;

const AlignBlock = styled.div`
  position: relative;
  overflow: visible;
  padding-top: 16px;
  flex: 1;
`;
