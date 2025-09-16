import React from "react";
import { Card } from "../Shared/Mobile/MobileSharedComponents";

interface Session {
  date: string; // e.g. "2025-09-12"
  time: string; // e.g. "2:30 PM"
  hours: number | string; // e.g. 2.5
  method: string; // e.g. "Check-In" or "Manual"
}

interface SessionHistoryItemProps {
  session: Session;
}

export const SessionHistoryItem: React.FC<SessionHistoryItemProps> = ({
  session,
}) => (
  <Card className="p-4">
    <div className="flex justify-between items-start mb-2">
      <div>
        <p className="font-medium text-gray-600">{session.date}</p>
        <p className="text-gray-600 text-sm">{session.time}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-gray-600">{session.hours} hrs</p>
        <p className="text-gray-500 text-sm">{session.method}</p>
      </div>
    </div>
  </Card>
);
