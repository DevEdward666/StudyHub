import Card from "../components/Shared/Card";

const SettingsPage = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold text-gray-900">Admin Settings</h2>

    <Card title="Pricing Configuration">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              5 Hours Package
            </label>
            <input
              type="number"
              defaultValue="200"
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              10 Hours Package
            </label>
            <input
              type="number"
              defaultValue="350"
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              20 Hours Package
            </label>
            <input
              type="number"
              defaultValue="600"
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              25 Hours Package
            </label>
            <input
              type="number"
              defaultValue="900"
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
          </div>
        </div>
      </div>
    </Card>

    <Card title="Notification Settings">
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-3 accent-teal-500"
            defaultChecked
          />
          <span className="text-sm text-gray-700">Low balance alerts</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-3 accent-teal-500"
            defaultChecked
          />
          <span className="text-sm text-gray-700">Payment confirmations</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-3 accent-teal-500" />
          <span className="text-sm text-gray-700">Daily revenue reports</span>
        </label>
      </div>
    </Card>

    <Card title="System Controls">
      <div className="space-y-3">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors">
          Backup Database
        </button>
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-medium transition-colors">
          Send Mass Notification
        </button>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition-colors">
          Emergency Logout All Users
        </button>
      </div>
    </Card>
  </div>
);
export default SettingsPage;
