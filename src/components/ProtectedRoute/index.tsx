import { FC } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  element: React.FC;
  loggedIn: boolean;
}

export const ProtectedRoute: FC<Props> = ({ element: Component, loggedIn }) =>
  loggedIn ? <Component /> : <Navigate to="/login" replace />;
