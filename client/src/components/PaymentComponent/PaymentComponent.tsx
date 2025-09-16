import { Clock } from "lucide-react";
import { useAdminContext } from "../../Provider/AdminProvider";
import ActionButton from "../Shared/ActionButton";
import Card from "../Shared/Card";

// Reuse the CashPayment type from AdminProvider
type CashPayment = {
  id: number;
  name: string;
  amount: number;
  hours: number;
  timestamp: string;
};

type PaymentCardProps = {
  payment: CashPayment;
};

const PaymentCard: React.FC<PaymentCardProps> = ({ payment }) => {
  const { confirmPayment } = useAdminContext();

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-semibold text-gray-900">{payment.name}</p>
          <p className="text-sm text-gray-600">
            Payment received at {payment.timestamp}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold text-green-600">₱{payment.amount}</p>
          <p className="text-sm text-gray-600">{payment.hours} hours</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4">
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-yellow-600 mr-2" />
          <span className="text-sm text-yellow-700">
            Confirm cash payment received to credit {payment.hours} hours
          </span>
        </div>
      </div>

      <div className="flex space-x-3">
        <ActionButton
          onClick={() => confirmPayment(payment.id)}
          gradient="from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          className="flex-1"
        >
          Confirm & Credit Hours
        </ActionButton>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-colors">
          Decline
        </button>
      </div>
    </Card>
  );
};

export default PaymentCard;
