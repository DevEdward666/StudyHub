import React from "react";
import { ActionButton } from "../Shared/Mobile/MobileSharedComponents";

interface Package {
  hours: number;
  price: number;
  popular?: boolean;
  badge?: string;
}

interface PackageCardProps {
  pkg: Package;
  onPurchase: (hours: number, price: number) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  onPurchase,
}) => (
  <div
    className={`border rounded-xl p-4 relative ${
      pkg.popular ? "border-blue-500 bg-blue-50" : "border-gray-200"
    }`}
  >
    {pkg.popular && (
      <span className="absolute-top-2 left-4 bg-blue-500 text-white px-2 py-1 text-xs rounded-full">
        Most Popular
      </span>
    )}
    {pkg.badge && (
      <span className="absolute-top-2 right-4 bg-green-500 text-white px-2 py-1 text-xs rounded-full">
        {pkg.badge}
      </span>
    )}
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-gray-600">{pkg.hours} Hours</p>
        <p className="text-gray-600">₱{pkg.price}</p>
        {pkg.hours === 25 && (
          <p className="text-green-600 text-sm">Save ₱100!</p>
        )}
      </div>
      <ActionButton
        onClick={() => onPurchase(pkg.hours, pkg.price)}
        className="bg-blue-500 hover:bg-blue-600 text-white !px-4 !py-2 !rounded-xl"
      >
        Buy Now
      </ActionButton>
    </div>
  </div>
);
