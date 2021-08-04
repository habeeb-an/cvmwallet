import React, { FunctionComponent } from "react";
import { PageWithScrollView } from "../../../../components/staging/page";
import { MyRewardCard } from "./reward-card";
import { DelegationsCard } from "./delegations-card";
import { useStyle } from "../../../../styles";

export const StakingDashboardScreen: FunctionComponent = () => {
  const style = useStyle();

  return (
    <PageWithScrollView>
      <MyRewardCard containerStyle={style.flatten(["margin-bottom-16"])} />
      <DelegationsCard containerStyle={style.flatten(["margin-bottom-16"])} />
    </PageWithScrollView>
  );
};