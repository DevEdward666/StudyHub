import React from "react";
import { History, Settings } from "lucide-react";
import { ActionButton } from "../Shared/Mobile/MobileSharedComponents";

interface SecondaryActionsProps {
  onHistory: () => void;
  onSettings: () => void;
}

export const SecondaryActions: React.FC<SecondaryActionsProps> = ({
  onHistory,
  onSettings,
}) => (
  <div className="grid grid-cols-2 gap-4">
    <ActionButton
      onClick={onHistory}
      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-4 rounded-xl flex flex-col items-center space-y-2"
    >
      <History className="h-6 w-6" />
      <span className="text-sm">History</span>
    </ActionButton>

    <ActionButton
      onClick={onSettings}
      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-4 rounded-xl flex flex-col items-center space-y-2"
    >
      <Settings className="h-6 w-6" />
      <span className="text-sm">Settings</span>
    </ActionButton>
  </div>
);
