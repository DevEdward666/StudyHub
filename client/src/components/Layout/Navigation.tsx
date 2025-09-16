import {
  Activity,
  Users,
  CreditCard,
  TrendingUp,
  Settings,
} from "lucide-react";
import { useAdminContext } from "../../Provider/AdminProvider";
import { useHistory, useLocation } from "react-router";
import { useEffect } from "react";
import { IonContent } from "@ionic/react";

const LayoutNavigation = () => {
  const { currentPage, setCurrentPage } = useAdminContext();
  const history = useHistory();
  const location = useLocation();

  const navItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: Activity,
      url: "/admin-dashboard",
    },
    { key: "users", label: "Active Users", icon: Users, url: "/admin-users" },
    {
      key: "payments",
      label: "Payments",
      icon: CreditCard,
      url: "/admin-payments",
    },
    {
      key: "reports",
      label: "Reports",
      icon: TrendingUp,
      url: "/admin-reports",
    },
    {
      key: "settings",
      label: "Settings",
      icon: Settings,
      url: "/admin-settings",
    },
  ];

  // 🟢 Sync currentPage with URL when browser Back/Forward is used
  useEffect(() => {
    const match = navItems.find((item) => item.url === location.pathname);
    if (match) {
      setCurrentPage(match.key);
    }
  }, [location.pathname]);

  const handleNavigate = (key: string, url: string) => {
    setCurrentPage(key);
    history.push(url);
  };

  return (
    <div className="bg-white border-b px-6 py-2">
      <div className="flex space-x-6">
        {navItems.map(({ key, label, icon: Icon, url }) => (
          <button
            key={key}
            onClick={() => handleNavigate(key, url)}
            className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentPage === key
                ? "text-teal-600 bg-teal-50"
                : "text-gray-600 hover:text-teal-600 hover:bg-teal-50"
            }`}
          >
            <Icon className="h-4 w-4 mr-2" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LayoutNavigation;
