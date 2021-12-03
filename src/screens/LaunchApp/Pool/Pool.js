import { Button, Menu, MenuItem, Typography } from "@material-ui/core";
import useStyles from "./styles/Pool.styles";
import InboxIcon from "@material-ui/icons/Inbox";
import { useState } from "react";
import ConnetWalletModal from "../../Component/ConnetWalletModal/ConnetWalletModal";
const Pool = () => {
  const classes = useStyles();
  const [connectWalletModalIsOpen, setconnectWalletModalIsOpen] =
    useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.pageContianer}>
      <div className={classes.root}>
        <div className={classes.tapPart}>
          <div>
            <Typography className={classes.title}>Pools Overview</Typography>
          </div>
          <div>
            <Button
              variant="contained"
              className={classes.moreOption}
              onClick={handleClick}
            >
              More
            </Button>

            <Button variant="contained" className={classes.newPostion}>
              + New Position
            </Button>
            <div>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                classes={{ paper: classes.moreOptionMenuPaper }}
                className={classes.moreOptionMenu}
                MenuListProps={{
                  classes: { root: classes.moreOptionMenuRoot },
                }}
                keepMounted
              >
                <MenuItem onClick={handleClose}>
                  <div>Create a pool</div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <div>Migrate</div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <div>V2 liquidity</div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <div>Learn</div>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div className={classes.bodyPart}>
          <div className={classes.learnMore}>
            <div className={classes.learnMoreTextContianer}>
              <Typography className={classes.learnMoreTitle}>
                Learn about providing liquidity
              </Typography>
            </div>
            <div className={classes.learnMoreTextContianer}>
              <Typography className={classes.learnMoreDescription}>
                Check out our v3 LP walkthrough and migration guides.
              </Typography>
            </div>
          </div>
          <div className={classes.toolTip}>
            <div className={classes.learnMoreTextContianer}>
              <Typography className={classes.learnMoreTitle}>
                Top pools
              </Typography>
            </div>
            <div className={classes.learnMoreTextContianer}>
              <Typography className={classes.learnMoreDescription}>
                Explore popular pools on Uniswap Analytics.
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.bottomPartContianer}>
          <div className={classes.bottomPart}>
            <div>
              <InboxIcon className={classes.icon} />
            </div>
            <div>
              <Typography className={classes.bottomPartText}>
                Your V3 liquidity positions will appear here.
              </Typography>
            </div>
            <Button
              variant="contained"
              fullWidth
              className={classes.button}
              onClick={() => setconnectWalletModalIsOpen(true)}
            >
              Connect a wallet
            </Button>
          </div>
        </div>
      </div>
      <ConnetWalletModal
        isOpen={connectWalletModalIsOpen}
        onClose={() => setconnectWalletModalIsOpen(false)}
      />
    </div>
  );
};
export default Pool;
