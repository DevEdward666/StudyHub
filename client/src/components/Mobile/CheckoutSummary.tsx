import { CheckCircle } from "lucide-react";
import { ActionButton, Card } from "../Shared/Mobile/MobileSharedComponents";
import { formatTime } from "../../helpers/MobileUtils";
import React from "react";

interface CheckoutSummaryProps {
  sessionTime: number; // session duration in seconds
  hoursUsed: number; // how many hours were deducted
  newBalance: number; // remaining balance in hours
  onReturnHome: () => void;
}

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  sessionTime,
  hoursUsed,
  newBalance,
  onReturnHome,
}) => (
  <div className="space-y-6 text-center">
    <CheckCircle className="h-16 w-16 !text-green-500 mx-auto" />
    <h2 className="text-xl font-bold !text-gray-600">Session Complete!</h2>

    <Card className="bg-gray-50 p-6 space-y-4 !text-gray-600">
      <div className="flex justify-between">
        <span>Session Duration:</span>
        <span className="font-semibold">{formatTime(sessionTime)}</span>
      </div>
      <div className="flex justify-between">
        <span>Hours Deducted:</span>
        <span className="font-semibold">{hoursUsed.toFixed(2)} hrs</span>
      </div>
      <div className="flex justify-between border-t pt-2">
        <span>Updated Balance:</span>
        <span className="font-semibold text-blue-600">
          {newBalance.toFixed(1)} hrs
        </span>
      </div>
    </Card>

    <ActionButton
      onClick={onReturnHome}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
    >
      Return to Dashboard
    </ActionButton>
  </div>
);
