import {
  Button,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import AppIcon from "@material-ui/icons/Polymer";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useStyles from "./styles/WebsiteTabBar.styles";

const WebsiteTabBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className={classes.header}>
      <div className={classes.root}>
        <div>
          <AppIcon />
        </div>
        {!isSmallScreen ? (
          <nav className={classes.navContainer}>
            <NavPart name="Ecosystem" />
            <NavPart name="Community" />
            <NavPart name="Governance" />
            <NavPart name="Developers" />
            <NavPart name="Blog" />
            <NavPart name="FAQ" />
            <Link to="/launch/swap" className={classes.buttonContainer}>
              <Button variant="contained" className={classes.button}>
                Launch App
              </Button>
            </Link>
          </nav>
        ) : (
          <>
            <Button className={classes.menuButton} onClick={handleClick}>
              Menu
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              classes={{ paper: classes.moreOptionMenuPaper }}
              className={classes.moreOptionMenu}
              MenuListProps={{
                classes: { root: classes.moreOptionMenuRoot },
              }}
            >
              <MenuItem onClick={handleClose}>
                <div>Ecosystem</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div>Community</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div>Governance</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div>Developers</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div>Blog</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div>FAQ</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div>Legal & Privacy</div>
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
    </header>
  );
};
const NavPart = ({ name }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Link
      to="index"
      className={[
        classes.tabPart,
        history.location.pathname.includes(name) ? classes.activeTab : "",
      ].join(" ")}
    >
      <Typography>{name}</Typography>
    </Link>
  );
};

export default WebsiteTabBar;
