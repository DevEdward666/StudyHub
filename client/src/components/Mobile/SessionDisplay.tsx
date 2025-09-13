import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { formatTime } from "../../helpers/MobileUtils";
import { ActionButton, Card } from "../Shared/Mobile/MobileSharedComponents";

interface SessionDisplayProps {
  sessionTime: number; // session time in seconds (or ms, depending on your formatTime)
  balance: number; // remaining balance in hours
  onPause: () => void;
  onCheckOut: () => void;
}

export const SessionDisplay: React.FC<SessionDisplayProps> = ({
  sessionTime,
  balance,
  onPause,
  onCheckOut,
}) => (
  <div className="space-y-6 text-center">
    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-xl font-bold text-green-800 mb-2">
        Study Session Active
      </h2>
      <p className="text-green-600">You're checked in and ready to study!</p>
    </div>

    <Card className="p-6">
      <p className="text-gray-600 mb-2">Session Time</p>
      <p className="text-4xl font-bold text-blue-600 mb-4">
        {formatTime(sessionTime)}
      </p>
      <p className="text-gray-600 mb-2">Remaining Balance</p>
      <p className="text-2xl font-semibold">{balance.toFixed(1)} hours</p>
    </Card>

    <div className="space-y-3">
      <ActionButton
        onClick={onPause}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 !rounded-lg"
      >
        Pause Session (10 min max)
      </ActionButton>
      <ActionButton
        onClick={onCheckOut}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 !rounded-lg"
      >
        Check Out
      </ActionButton>
    </div>

    {sessionTime > 3300 && (
      <div className="bg-orange-50 border border-orange-200 !rounded-lg p-3">
        <AlertTriangle className="h-5 w-5 text-orange-500 mx-auto mb-2" />
        <p className="text-orange-700 text-sm">
          15 minutes remaining in your balance!
        </p>
      </div>
    )}
  </div>
);
