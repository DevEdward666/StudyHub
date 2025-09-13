import React from "react";

export type PageId =
  | "home"
  | "session"
  | "history"
  | "settings"
  | "buyHours"
  | "checkout";

export interface BottomNavigationItem {
  id: PageId;
  label: string;
  icon: React.ReactNode;
}

interface BottomNavigationProps {
  items: BottomNavigationItem[];
  currentPage: PageId;
  onNavigate: (pageId: PageId) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  currentPage,
  onNavigate,
}) => (
  <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t px-4 py-2">
    <div className="flex justify-around">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`p-2 rounded ${
            currentPage === item.id ? "text-blue-500" : "text-gray-400"
          }`}
          aria-label={item.label}
        >
          {item.icon}
        </button>
      ))}
    </div>
  </div>
);
