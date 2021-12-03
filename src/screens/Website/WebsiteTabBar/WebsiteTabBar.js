import { Button, Typography } from "@material-ui/core";
import AppIcon from "@material-ui/icons/Polymer";
import { useHistory } from "react-router";
import useStyles from "./styles/WebsiteTabBar.styles";

const WebsiteTabBar = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.root}>
        <div>
          <AppIcon />
        </div>
        <nav className={classes.navContainer}>
          <NavPart name="Ecosystem" />
          <NavPart name="Community" />
          <NavPart name="Governance" />
          <NavPart name="Developers" />
          <NavPart name="Blog" />
          <NavPart name="FAQ" />
          <a href="/launch/swap">
            <Button variant="contained" className={classes.button}>
              Launch App
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};
const NavPart = ({ name }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <a
      href={`/website/${"mainpage"}`}
      className={[
        classes.tabPart,
        history.location.pathname.includes(name) ? classes.activeTab : "",
      ].join(" ")}
    >
      <Typography>{name}</Typography>
    </a>
  );
};

export default WebsiteTabBar;
