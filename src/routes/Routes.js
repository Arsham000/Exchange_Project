import { Route } from "react-router-dom";
import MainTabBar from "../screens/LaunchApp/MainTabBar/MainTabBar";
import Pool from "../screens/LaunchApp/Pool/Pool";
import Swap from "../screens/LaunchApp/Swap/Swap";
import Vote from "../screens/LaunchApp/Vote/Vote";
const Routes = () => {
  return (
    <>
      <Route path="/launch">
        <MainTabBar />
      </Route>
      <Route exact path="/launch/swap">
        <Swap />
      </Route>
      <Route exact path="/launch/pool">
        <Pool />
      </Route>
      <Route exact path="/launch/vote">
        <Vote />
      </Route>
    </>
  );
};
export default Routes;
