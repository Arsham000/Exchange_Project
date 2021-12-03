import React from "react";
import { useHistory } from "react-router";
import useStyles from "./styles/TabList.styles";

const TabList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {tabsText.map((item, index) => (
        <Tab name={item} key={item} />
      ))}
    </div>
  );
};
function Tab({ name }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <a
      className={[
        classes.tab,
        history.location.pathname.includes(name) ? classes.activeTab : "",
      ].join(" ")}
      href={`/launch/${name}`}
    >
      {name}
    </a>
  );
}
export default TabList;
const tabsText = ["Swap", "Pool", "Vote", "Charts"];
