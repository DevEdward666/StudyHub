import UserSessionCard, {
  UserSession,
} from "../components/UserComponent/UserSession";
import { useAdminContext } from "../Provider/AdminProvider";

const UsersPage = () => {
  const { activeSessions, stats } = useAdminContext();

  return (
    <div className="space-y-6 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Active Users ({stats.activeUsers})
        </h2>
        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          {stats.activeUsers} Active
        </div>
      </div>

      <div className="grid gap-4 max-h-[70vh] overflow-y-auto pr-2">
        {activeSessions.map((session: UserSession) => (
          <UserSessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
