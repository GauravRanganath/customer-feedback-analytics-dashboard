import { RatingsChart } from "./RatingsChart";
import { InteractionsChart } from "./InteractionsChart";
import { AcquisitionsChart } from "./AcquisitionsChart";

export const Analytics = () => {
  return (
    <div>
      <RatingsChart />
      <InteractionsChart />
      <AcquisitionsChart />
    </div>
  );
};
