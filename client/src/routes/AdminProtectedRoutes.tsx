import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const AdminProtectedRoutes = ({
  component: Component,
  ...rest
}: any) => {
  const { currentUser } = useAuth();

  const isAdmin =
    currentUser?.accessToken && currentUser?.user?.role === "admin";

  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? (
          <Component {...props} />
        ) : currentUser?.accessToken ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
