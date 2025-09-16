import React from "react";
import { Zap, CheckCircle } from "lucide-react";

interface EfficiencyFeaturesProps {
  features: string[];
}

export const EfficiencyFeatures: React.FC<EfficiencyFeaturesProps> = ({
  features,
}) => (
  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
    <div className="flex items-center mb-2">
      <Zap className="h-5 w-5 text-yellow-600 mr-2" />
      <span className="font-medium text-yellow-800">
        New Efficiency Features
      </span>
    </div>
    <div className="space-y-2 text-sm text-yellow-700">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </div>
);
