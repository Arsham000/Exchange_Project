import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles/TabList.styles";

const TabList = () => {
  const classes = useStyles();
  const [active, setactive] = useState(0);
  return (
    <div className={classes.root}>
      {tabsText.map((item, index) => (
        <Tab
          name={item}
          key={item}
          isActive={index === active}
          setactive={setactive}
          index={index}
        />
      ))}
    </div>
  );
};
function Tab({ name, isActive, setactive, index }) {
  const classes = useStyles();
  return (
    <Link
      className={[classes.tab, isActive ? classes.activeTab : ""].join(" ")}
      to={`/launch/${name}`}
      onClick={() => setactive(index)}
    >
      <Typography>{name}</Typography>
    </Link>
  );
}
export default TabList;
const tabsText = ["Swap", "Pool", "Vote", "Charts"];
