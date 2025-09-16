import { useAdminContext } from "../../Provider/AdminProvider";

const LayoutNotification = () => {
  const { showNotification, notificationMessage } = useAdminContext();

  if (!showNotification) return null;

  return (
    <div className="bg-teal-500 text-white px-6 py-3 text-center">
      ✅ {notificationMessage}
    </div>
  );
};

export default LayoutNotification;
