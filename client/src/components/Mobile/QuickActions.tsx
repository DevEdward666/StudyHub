import React from "react";
import { CreditCard, QrCode } from "lucide-react";
import { ActionButton } from "../Shared/Mobile/MobileSharedComponents";

interface QuickActionsProps {
  onBuyHours: () => void;
  onCheckIn: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onBuyHours,
  onCheckIn,
}) => (
  <div className="grid grid-cols-2 gap-4">
    <ActionButton
      onClick={onBuyHours}
      className="bg-green-500 hover:bg-green-600 text-white p-4 !rounded-xl flex flex-col items-center space-y-2 h-20"
    >
      <CreditCard className="h-10 w-8 pt-4" />
      <span className="font-medium">Buy Hours</span>
    </ActionButton>

    <ActionButton
      onClick={onCheckIn}
      className="bg-blue-500 hover:bg-blue-600 text-white p-4 !rounded-xl flex flex-col items-center space-y-2 h-20"
    >
      <QrCode className="h-10 w-8 pt-4" />
      <span className="font-medium">Scan QR</span>
    </ActionButton>
  </div>
);
