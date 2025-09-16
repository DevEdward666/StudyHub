import { SessionHistoryItem } from "../../components/Mobile/SessionHistory";
import { PageHeader } from "../../components/Shared/Mobile/MobileSharedComponents";
import { useStudyHub } from "./StudyHubMobile";

export const HistoryPage = () => {
  const { actions } = useStudyHub();

  const mockSessions = [
    { date: "Today", time: "2:30 PM - 4:15 PM", hours: "1.75", method: "QR" },
    {
      date: "Yesterday",
      time: "10:00 AM - 12:30 PM",
      hours: "2.50",
      method: "Cash",
    },
    { date: "Dec 8", time: "3:00 PM - 6:00 PM", hours: "3.00", method: "QR" },
  ];

  return (
    <div className="space-y-4">
      <PageHeader
        title="Session History"
        onBack={() => actions.navigate("home")}
      />

      <div className="space-y-3">
        {mockSessions.map((session, idx) => (
          <SessionHistoryItem key={idx} session={session} />
        ))}
      </div>
    </div>
  );
};
