import { Route, Redirect } from "react-router-dom";
import MainTabBar from "../screens/LaunchApp/MainTabBar/MainTabBar";
import Pool from "../screens/LaunchApp/Pool/Pool";
import Swap from "../screens/LaunchApp/Swap/Swap";
import Vote from "../screens/LaunchApp/Vote/Vote";
import MainPage from "../screens/Website/MainPage/MainPage";
import WebsiteTabBar from "../screens/Website/WebsiteTabBar/WebsiteTabBar";
const Routes = () => {
  return (
    <>
      <Route path="/index">
        <WebsiteTabBar />
        <MainPage />
      </Route>
      <Route path="/launch">
        <MainTabBar />
      </Route>
      <Route exact path="/launch/swap">
        <Swap />
      </Route>
      <Route exact path="/launch/index">
        <Swap />
      </Route>
      <Route exact path="/launch/pool">
        <Pool />
      </Route>
      <Route exact path="/launch/vote">
        <Vote />
      </Route>
      <Redirect to="index" push />
    </>
  );
};
export default Routes;
