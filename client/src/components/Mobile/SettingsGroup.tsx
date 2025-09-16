import React, { ReactNode } from "react";
import { Card } from "../Shared/Mobile/MobileSharedComponents";

interface SettingsGroupProps {
  title: string;
  children: ReactNode;
}

export const SettingsGroup: React.FC<SettingsGroupProps> = ({
  title,
  children,
}) => (
  <Card className="p-4">
    <h3 className="font-medium mb-3 text-gray-600">{title}</h3>
    {children}
  </Card>
);
