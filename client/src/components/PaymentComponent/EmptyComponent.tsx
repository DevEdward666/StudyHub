import { CheckCircle } from "lucide-react";
import Card from "../Shared/Card";

const EmptyPayments = () => (
  <Card className="text-center p-8">
    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      All Payments Processed!
    </h3>
    <p className="text-gray-600">No pending cash payments at the moment.</p>
  </Card>
);

export default EmptyPayments;
