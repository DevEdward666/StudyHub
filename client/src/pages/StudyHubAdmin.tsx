import { Navigation } from "lucide-react";
import Header from "../components/Layout/Header";
import { AdminProvider } from "../Provider/AdminProvider";
import PageRouter from "./PageRouter";
import LayoutNotification from "../components/Layout/Notification";
import LayoutNavigation from "../components/Layout/Navigation";
import { IonCard, IonContent, IonPage } from "@ionic/react";

const StudyHubAdmin = () => {
  return (
    <AdminProvider>
      <IonPage>
        <IonContent>
          <div className=" bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pb-20">
            <Header />
            <LayoutNotification />
            <LayoutNavigation />
            <PageRouter />
          </div>
        </IonContent>
      </IonPage>
    </AdminProvider>
  );
};

export default StudyHubAdmin;
