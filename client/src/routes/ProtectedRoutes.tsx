// src/routes/ProtectedRoute.tsx
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
  requiredRole?: string; // 👈 new prop
}

export const ProtectedRoute = ({
  component: Component,
  requiredRole,
  ...rest
}: ProtectedRouteProps) => {
  // const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (!currentUser?.accessToken) {
        //   return <Redirect to="/login" />;
        // }

        // if (requiredRole && currentUser.user.role.toString().toLowerCase() !== requiredRole.toString().toLowerCase()) {
        //   return <Redirect to="/dashboard" />;
        // }

        return <Component {...props} />;
      }}
    />
  );
};
