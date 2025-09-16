import { IonContent, IonPage } from "@ionic/react";
import { Bell } from "lucide-react";

const Header = () => (
  <div className="bg-white shadow-sm border-b px-6 py-4">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">StudyHub Admin</h1>
        <p className="text-sm text-gray-600">Timekeeper Dashboard</p>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="h-6 w-6 text-gray-400" />
        <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Online
        </div>
      </div>
    </div>
  </div>
);
export default Header;
