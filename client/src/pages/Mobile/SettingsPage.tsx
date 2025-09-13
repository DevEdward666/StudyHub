import { CheckboxSetting } from "../../components/Mobile/CheckBoxSettings";
import { SettingsGroup } from "../../components/Mobile/SettingsGroup";
import { PageHeader } from "../../components/Shared/Mobile/MobileSharedComponents";
import { useStudyHub } from "./StudyHubMobile";

export const SettingsPage = () => {
  const { actions } = useStudyHub();

  return (
    <div className="space-y-6">
      <PageHeader title="Settings" onBack={() => actions.navigate("home")} />

      <div className="space-y-4">
        <SettingsGroup title="Auto-Reload Settings">
          <div className="space-y-3">
            <CheckboxSetting
              label="Enable auto-reload when balance < 2 hours"
              defaultChecked={true}
              onChange={undefined}
            />
            <div className="ml-6">
              <label className="block text-sm text-gray-600 mb-1">
                Auto-reload package:
              </label>
              <select className="border rounded px-3 py-1 !text-gray-600 text-sm">
                <option className="!text-gray-600">10 Hours (₱350)</option>
                <option className="!text-gray-600">20 Hours (₱600)</option>
              </select>
            </div>
          </div>
        </SettingsGroup>

        <SettingsGroup title="Notifications">
          <div className="space-y-3">
            <CheckboxSetting
              label="Low balance warnings"
              defaultChecked={true}
              onChange={undefined}
            />
            <CheckboxSetting
              label="Session reminders"
              defaultChecked={true}
              onChange={undefined}
            />
            <CheckboxSetting label="Promotional offers" onChange={undefined} />
          </div>
        </SettingsGroup>
      </div>
    </div>
  );
};
