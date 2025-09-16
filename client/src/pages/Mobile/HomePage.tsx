import { EfficiencyFeatures } from "../../components/Mobile/EfficiencyFeatures";
import { QuickActions } from "../../components/Mobile/QuickActions";
import { SecondaryActions } from "../../components/Mobile/SecondaryActions";
import { WalletBalance } from "../../components/Mobile/WalletBalance";
import { EFFICIENCY_FEATURES } from "../../Interface/MobileAppInterface";
import { useStudyHub } from "./StudyHubMobile";

export const HomePage = () => {
  const { state, actions } = useStudyHub();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">StudyHub</h1>
        <WalletBalance balance={state.walletBalance} />
      </div>

      <QuickActions
        onBuyHours={() => actions.navigate("buyHours")}
        onCheckIn={actions.handleCheckIn}
      />

      <SecondaryActions
        onHistory={() => actions.navigate("history")}
        onSettings={() => actions.navigate("settings")}
      />

      <EfficiencyFeatures features={EFFICIENCY_FEATURES} />
    </div>
  );
};
