import { UserCheck, AlertTriangle } from "lucide-react";
import { useAdminContext } from "../../Provider/AdminProvider";
import Card from "../Shared/Card";

export type UserSession = {
  id: number;
  name: string;
  seat: string;
  balance: number;
  sessionTime: number;
  status: "active" | "low-balance";
};

interface UserSessionCardProps {
  session: UserSession;
}

const UserSessionCard: React.FC<UserSessionCardProps> = ({ session }) => {
  const { formatTime } = useAdminContext();

  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div
            className={`p-2 rounded-full mr-3 ${
              session.status === "low-balance" ? "bg-red-100" : "bg-green-100"
            }`}
          >
            <UserCheck
              className={`h-5 w-5 ${
                session.status === "low-balance"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{session.name}</p>
            <p className="text-sm text-gray-600">Seat: {session.seat}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-teal-600">{session.balance} hrs</p>
          <p className="text-xs text-gray-500">
            {formatTime(session.sessionTime)} elapsed
          </p>
        </div>
      </div>

      {session.status === "low-balance" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-3">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
            <span className="text-sm text-red-700">
              Low balance - less than 1 hour remaining
            </span>
          </div>
        </div>
      )}

      <div className="flex space-x-2">
        <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-xl text-sm font-medium transition-colors h-10">
          Credit Hours
        </button>
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-xl text-sm font-medium transition-colors">
          View Details
        </button>
      </div>
    </Card>
  );
};

export default UserSessionCard;
