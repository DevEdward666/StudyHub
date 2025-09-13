import { JSX } from "react";
import { useAdminContext } from "../Provider/AdminProvider";
import DashboardPage from "./DashboardPage";
import PaymentsPage from "./PaymentsPage";
import ReportsPage from "./ReportsPage";
import SettingsPage from "./SettingsPage";
import UsersPage from "./UserPage";
import { IonContent } from "@ionic/react";

type PageKey = "dashboard" | "users" | "payments" | "reports" | "settings";

const PageRouter: React.FC = () => {
  const { currentPage } = useAdminContext();

  const pages: Record<PageKey, JSX.Element> = {
    dashboard: <DashboardPage />,
    users: <UsersPage />,
    payments: <PaymentsPage />,
    reports: <ReportsPage />,
    settings: <SettingsPage />,
  };

  return (
    <div className="p-6">
      {pages[currentPage as PageKey] ?? <DashboardPage />}
    </div>
  );
};

export default PageRouter;
