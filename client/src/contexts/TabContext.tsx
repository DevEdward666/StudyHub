import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

type TabContextType = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const TabContext = createContext<TabContextType | undefined>(undefined);

type TabProviderProps = {
  children: ReactNode;
};

export const TabProvider = ({ children }: TabProviderProps) => {
  const location = useLocation();

  const getTabFromPath = (pathname: string) => {
    if (pathname.includes("/collections")) return "collections";
    if (pathname.includes("/dashboard")) return "dashboard";
    return "dashboard"; // default
  };

  const [activeTab, setActiveTab] = useState(() => getTabFromPath(location.pathname));

  useEffect(() => {
    const newTab = getTabFromPath(location.pathname);
    setActiveTab(newTab);
  }, [location.pathname]);

  return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>;
};
