import React from "react";
import { AlertTriangle, Clock } from "lucide-react";

interface WalletBalanceProps {
  balance: number;
}

export const WalletBalance: React.FC<WalletBalanceProps> = ({ balance }) => (
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-blue-100">Wallet Balance</p>
        <p className="text-3xl font-bold">{balance.toFixed(1)} hrs</p>
      </div>
      <Clock className="h-12 w-12 text-blue-200" />
    </div>
    {balance < 2 && (
      <div className="mt-4 bg-red-500/20 border border-red-300 rounded-lg p-3 flex items-center">
        <AlertTriangle className="h-5 w-5 mr-2" />
        <span className="text-sm">
          Low balance! Top up to continue studying.
        </span>
      </div>
    )}
  </div>
);
