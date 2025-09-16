import React from "react";
import { Card } from "../Shared/Mobile/MobileSharedComponents";

interface PaymentOptionsProps {
  options: string[];
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({ options }) => (
  <Card className="!bg-gray-50">
    <h3 className="!font-medium mb-2 text-gray-600">Payment Options</h3>
    <div className="space-y-2 text-sm !text-gray-600">
      {options.map((option) => (
        <p key={option}>• {option}</p>
      ))}
    </div>
  </Card>
);
