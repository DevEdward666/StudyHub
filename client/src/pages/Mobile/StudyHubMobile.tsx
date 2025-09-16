import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  BottomNavigation,
  BottomNavigationItem,
} from "../../components/Mobile/BottomNavigation";
import { Notification } from "../../components/Shared/Mobile/MobileSharedComponents";
import { calculateHoursUsed } from "../../helpers/MobileUtils";

import { BuyHoursPage } from "./BuyHoursPage";
import { CheckoutPage } from "./CheckOutPage";
import { HistoryPage } from "./HistoryPage";
import { HomePage } from "./HomePage";
import { SessionPage } from "./SessionPage";
import { Home, Settings, History } from "lucide-react";
import { SettingsPage } from "./SettingsPage";

interface StudyHubState {
  currentPage:
    | "home"
    | "buyHours"
    | "session"
    | "checkout"
    | "history"
    | "settings";
  walletBalance: number;
  isCheckedIn: boolean;
  sessionTime: number;
  showNotification: boolean;
  notificationMessage: string;
  notificationType: "success" | "error";
}

// ✅ Define actions shape
interface StudyHubActions {
  navigate: (page: StudyHubState["currentPage"]) => void;
  showNotification: (message: string, type?: "success" | "error") => void;
  handleCheckIn: () => void;
  handleCheckOut: () => void;
  handlePurchase: (hours: number, price: number) => void;
}

interface StudyHubContextType {
  state: StudyHubState;
  actions: StudyHubActions;
}

const StudyHubContext = createContext<StudyHubContextType | undefined>(
  undefined
);

export const useStudyHub = () => {
  const context = useContext(StudyHubContext);
  if (!context) {
    throw new Error("useStudyHub must be used within StudyHubProvider");
  }
  return context;
};

export const StudyHubApp = () => {
  const [state, setState] = useState<StudyHubState>({
    currentPage: "home",
    walletBalance: 8.5,
    isCheckedIn: false,
    sessionTime: 0,
    showNotification: false,
    notificationMessage: "",
    notificationType: "success",
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (state.isCheckedIn) {
      interval = setInterval(() => {
        setState((prev) => ({ ...prev, sessionTime: prev.sessionTime + 1 }));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [state.isCheckedIn]);

  const actions: StudyHubActions = {
    navigate: (page) => {
      setState((prev) => ({ ...prev, currentPage: page }));
    },

    showNotification: (message, type = "success") => {
      setState((prev) => ({
        ...prev,
        showNotification: true,
        notificationMessage: message,
        notificationType: type,
      }));
      setTimeout(() => {
        setState((prev) => ({ ...prev, showNotification: false }));
      }, 3000);
    },

    handleCheckIn: () => {
      if (state.walletBalance > 0) {
        setState((prev) => ({
          ...prev,
          isCheckedIn: true,
          currentPage: "session",
        }));
        actions.showNotification("✅ Checked in successfully!");
      } else {
        setState((prev) => ({ ...prev, currentPage: "buyHours" }));
      }
    },

    handleCheckOut: () => {
      const hoursUsed = calculateHoursUsed(state.sessionTime);
      setState((prev) => ({
        ...prev,
        walletBalance: Math.max(0, prev.walletBalance - hoursUsed),
        isCheckedIn: false,
        sessionTime: 0,
        currentPage: "checkout",
      }));
    },

    handlePurchase: (hours, _price) => {
      setState((prev) => ({
        ...prev,
        walletBalance: prev.walletBalance + hours,
        currentPage: "home",
      }));
      actions.showNotification("💰 Balance updated!");
    },
  };

  const pages: Record<StudyHubState["currentPage"], ReactNode> = {
    home: <HomePage />,
    buyHours: <BuyHoursPage />,
    session: <SessionPage />,
    checkout: <CheckoutPage />,
    history: <HistoryPage />,
    settings: <SettingsPage />,
  };

  const NAVIGATION_ITEMS: BottomNavigationItem[] = [
    { id: "home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { id: "history", label: "History", icon: <History className="h-5 w-5" /> },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <StudyHubContext.Provider value={{ state, actions }}>
      <div className=" bg-gray-100 min-h-screen">
        {/* <StatusBar /> */}

        <Notification
          message={state.notificationMessage}
          type={state.notificationType}
          isVisible={state.showNotification}
        />

        <div className="p-4 pb-20">{pages[state.currentPage]}</div>

        <BottomNavigation
          items={NAVIGATION_ITEMS}
          currentPage={state.currentPage}
          onNavigate={actions.navigate}
        />
      </div>
    </StudyHubContext.Provider>
  );
};

export default StudyHubApp;
