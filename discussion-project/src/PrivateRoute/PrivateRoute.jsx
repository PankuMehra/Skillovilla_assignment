import { useContext } from "react";
import { authContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let { authState } = useContext(authContext);

  return authState.isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
