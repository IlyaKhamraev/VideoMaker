import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useStore } from "effector-react";

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
import { history } from "helpers/history";
import { $access, getProfile } from "store/access";
import { getFilms } from "store/films";

function App() {
  const [isInit, setIsInit] = useState(true);
  const { isAuthenticated } = useStore($access);

  useEffect(() => {
    if (isInit) {
      getFilms();
      getProfile();
      setIsInit((state) => !state);
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
