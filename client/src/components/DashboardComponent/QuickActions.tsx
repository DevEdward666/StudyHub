import { Zap } from "lucide-react";
import { useAdminContext } from "../../Provider/AdminProvider";
import Card from "../Shared/Card";
import ActionButton from "../Shared/ActionButton";

const QuickActions = () => {
  const { setCurrentPage } = useAdminContext();

  const actions = [
    {
      label: "Process Cash Payments",
      onClick: () => setCurrentPage("payments"),
      gradient:
        "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
    },
    {
      label: "Manage Active Users",
      onClick: () => setCurrentPage("users"),
      gradient:
        "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    },
    {
      label: "Send Announcements",
      onClick: () => {},
      gradient:
        "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    },
    {
      label: "View Reports",
      onClick: () => setCurrentPage("reports"),
      gradient:
        "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <Card title="Quick Actions" icon={Zap} className="w-250">
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <ActionButton
              key={index}
              onClick={action.onClick}
              gradient={action.gradient}
            >
              {action.label}
            </ActionButton>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default QuickActions;
