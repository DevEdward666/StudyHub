import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const RedirectIfAuthenticatedRoute = ({ component: Component, ...rest }: any) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser?.accessToken  ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};