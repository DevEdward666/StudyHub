import { PackageCard } from "../../components/Mobile/PageCard";
import { PaymentOptions } from "../../components/Mobile/PaymentOptions";
import { PageHeader } from "../../components/Shared/Mobile/MobileSharedComponents";
import {
  PACKAGE_DATA,
  PAYMENT_OPTIONS,
} from "../../Interface/MobileAppInterface";
import { useStudyHub } from "./StudyHubMobile";

export const BuyHoursPage = () => {
  const { actions } = useStudyHub();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Buy Study Hours"
        onBack={() => actions.navigate("home")}
      />

      <div className="space-y-4">
        {PACKAGE_DATA.map((pkg, idx) => (
          <PackageCard
            key={idx}
            pkg={pkg}
            onPurchase={actions.handlePurchase}
          />
        ))}
      </div>

      <PaymentOptions options={PAYMENT_OPTIONS} />
    </div>
  );
};
