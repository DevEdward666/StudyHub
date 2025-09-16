import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserSession } from "../components/UserComponent/UserSession";

type Stats = {
  activeUsers: number;
  todayRevenue: number;
  pendingPayments: number;
  occupancy: number;
};

type Session = {
  id: number;
  name: string;
  balance: number;
  sessionTime: number;
  status: string;
  seat: string;
};

type CashPayment = {
  id: number;
  name: string;
  amount: number;
  hours: number;
  timestamp: string;
};

type AdminContextType = {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  stats: Stats;
  setStats: React.Dispatch<React.SetStateAction<Stats>>;
  activeSessions: UserSession[];
  setActiveSessions: React.Dispatch<React.SetStateAction<UserSession[]>>;
  cashPayments: CashPayment[];
  setCashPayments: React.Dispatch<React.SetStateAction<CashPayment[]>>;
  showNotification: boolean;
  notificationMessage: string;
  showNotificationMessage: (message: string) => void;
  confirmPayment: (paymentId: number) => void;
  formatTime: (seconds: number) => string;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdminContext = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within AdminProvider");
  }
  return context;
};

type AdminProviderProps = {
  children: ReactNode;
};

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  // Dashboard stats
  const [stats, setStats] = useState<Stats>({
    activeUsers: 12,
    todayRevenue: 4850,
    pendingPayments: 3,
    occupancy: 75,
  });

  // Active sessions data
  const [activeSessions, setActiveSessions] = useState<UserSession[]>([
    {
      id: 1,
      name: "John Doe",
      balance: 5.5,
      sessionTime: 3600,
      status: "active",
      seat: "A-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      balance: 2.2,
      sessionTime: 1800,
      status: "active",
      seat: "B-03",
    },
    {
      id: 3,
      name: "Mike Chen",
      balance: 0.8,
      sessionTime: 7200,
      status: "low-balance",
      seat: "C-05",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      balance: 8.3,
      sessionTime: 900,
      status: "active",
      seat: "A-07",
    },
  ]);

  // Cash payments data
  const [cashPayments, setCashPayments] = useState<CashPayment[]>([
    {
      id: 1,
      name: "Alex Rivera",
      amount: 350,
      hours: 10,
      timestamp: "2:45 PM",
    },
    {
      id: 2,
      name: "Emma Wilson",
      amount: 600,
      hours: 20,
      timestamp: "2:38 PM",
    },
    { id: 3, name: "David Kim", amount: 200, hours: 5, timestamp: "2:32 PM" },
  ]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${mins}m`;
  };

  const showNotificationMessage = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage("");
    }, 3000);
  };

  const confirmPayment = (paymentId: number) => {
    setCashPayments((prev) => prev.filter((p) => p.id !== paymentId));
    setStats((prev) => ({
      ...prev,
      pendingPayments: prev.pendingPayments - 1,
    }));
    showNotificationMessage(
      "Payment confirmed and hours credited successfully!"
    );
  };

  const value: AdminContextType = {
    currentPage,
    setCurrentPage,
    stats,
    setStats,
    activeSessions,
    setActiveSessions,
    cashPayments,
    setCashPayments,
    showNotification,
    notificationMessage,
    showNotificationMessage,
    confirmPayment,
    formatTime,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
