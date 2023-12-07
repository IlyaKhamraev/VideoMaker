import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useStore } from "effector-react";

import { ProtectedRoute } from "src/components/ProtectedRoute";
import { PageNotFound } from "src/components/PageNotFound";
import { Container } from "src/components/Container";
import { FilmsList } from "src/components/FilmsList";
import { Film } from "src/components/FilmsList/Film";
import { Dashboard } from "src/components/Dashboard";
import { Contact } from "src/components/Contanct";
import { Login } from "src/components/Login";
import { Register } from "src/components/Register";
import { Info } from "src/components/Info";
import { history } from "src/helpers/history";
import { getFilms } from "src/store/films";
import { $access, getProfile } from "src/store/access";

function App() {
  const [isInit, setIsInit] = useState(true);
  const { isAuthenticated } = useStore($access);

  useEffect(() => {
    if (isInit) {
      getFilms();
      getProfile();
      setIsInit(false);
    }
  }, [isInit]);

  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="App">
      <div className="wrapper">
        <Container>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute
                  element={Dashboard}
                  loggedIn={isAuthenticated}
                />
              }
            />
            <Route path="/" element={<FilmsList />} />
            <Route path="/film/:id" element={<Film />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info" element={<Info />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
