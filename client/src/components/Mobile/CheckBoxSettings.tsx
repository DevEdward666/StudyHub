import React from "react";

interface CheckboxSettingProps {
  label: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const CheckboxSetting: React.FC<CheckboxSettingProps> = ({
  label,
  defaultChecked = false,
  onChange,
  disabled = false,
}) => (
  <label className="flex items-center">
    <input
      type="checkbox"
      className="mr-3"
      defaultChecked={defaultChecked}
      onChange={onChange}
      disabled={disabled}
    />
    <span className="text-sm text-gray-600">{label}</span>
  </label>
);
