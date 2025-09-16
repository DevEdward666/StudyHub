import EmptyPayments from "../components/PaymentComponent/EmptyComponent";
import PaymentCard from "../components/PaymentComponent/PaymentComponent";
import { useAdminContext } from "../Provider/AdminProvider";

const PaymentsPage = () => {
  const { cashPayments, stats } = useAdminContext();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Cash Payments</h2>
        <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
          {stats.pendingPayments} Pending
        </div>
      </div>

      {cashPayments.length === 0 ? (
        <EmptyPayments />
      ) : (
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          {cashPayments.map((payment) => (
            <PaymentCard key={payment.id} payment={payment} />
          ))}
        </div>
      )}
    </div>
  );
};
export default PaymentsPage;
