import useStyles from "./styles/MainTabBar.styles";
import AppIcon from "@material-ui/icons/Polymer";
import TabList from "./TabList";
import RightPart from "./RightPart";
const MainTabBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.partsContianer}>
        <div>
          <AppIcon />
        </div>
        <div className={classes.tabListContianer}>
          <TabList />
        </div>
        <div>
          <RightPart />
        </div>
      </div>
    </div>
  );
};
export default MainTabBar;
