import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TabProvider } from "../contexts/TabContext";
import { ProtectedRoute } from "./ProtectedRoutes";
import TabLayout from "../components/Layout/TabLayout";

interface ProtectedRouteWithTabsProps {
  path: string;
  component: React.ComponentType<RouteComponentProps>;
  exact?: boolean;
}

export const ProtectedRouteWithTabs: React.FC<ProtectedRouteWithTabsProps> = ({
  component: Component,
  ...rest
}) => (
  <ProtectedRoute
    {...rest}
    component={(props: RouteComponentProps) => (
      <TabProvider>
        <TabLayout>
          <Component {...props} />
        </TabLayout>
      </TabProvider>
    )}
  />
);
