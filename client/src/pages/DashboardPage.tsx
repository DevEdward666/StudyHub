import { IonContent } from "@ionic/react";
import DashboardStats from "../components/DashboardComponent/DashboardStats";
import QuickActions from "../components/DashboardComponent/QuickActions";
import RecentActivity from "../components/DashboardComponent/RecentActivity";

const DashboardPage = () => (
  <div className="space-y-6">
    <DashboardStats />
    {/* <QuickActions /> */}
    <RecentActivity />
  </div>
);

export default DashboardPage;
