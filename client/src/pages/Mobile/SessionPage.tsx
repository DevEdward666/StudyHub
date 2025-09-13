import { SessionDisplay } from "../../components/Mobile/SessionDisplay";
import { useStudyHub } from "./StudyHubMobile";

export const SessionPage = () => {
  const { state, actions } = useStudyHub();

  return (
    <SessionDisplay
      sessionTime={state.sessionTime}
      balance={state.walletBalance}
      onPause={() => {}} // Placeholder for pause functionality
      onCheckOut={actions.handleCheckOut}
    />
  );
};
