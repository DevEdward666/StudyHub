import { CheckoutSummary } from "../../components/Mobile/CheckoutSummary";
import { calculateHoursUsed } from "../../helpers/MobileUtils";
import { useStudyHub } from "./StudyHubMobile";

export const CheckoutPage = () => {
  const { state, actions } = useStudyHub();
  const hoursUsed = calculateHoursUsed(state.sessionTime);

  return (
    <CheckoutSummary
      sessionTime={state.sessionTime}
      hoursUsed={hoursUsed}
      newBalance={state.walletBalance}
      onReturnHome={() => actions.navigate("home")}
    />
  );
};
