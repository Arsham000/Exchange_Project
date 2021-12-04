import useStyles from "./styles/RightPart.styles";
import imgSrc from "../../../assets/img/eter.png";
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MoreOptionIcon from "@material-ui/icons/MoreHoriz";
import { useState } from "react";
import ConnetWalletModal from "../../Component/ConnetWalletModal/ConnetWalletModal";
const RightPart = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [connetModalIsOpen, setconnetModalIsOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <div className={classes.eterContianer}>
        <div className={classes.eter}>
          <img src={imgSrc} alt="eter" className={classes.image} />
          {!isSmallScreen && (
            <Typography color="primary" className={classes.eterName}>
              Ethereum
            </Typography>
          )}
        </div>
      </div>
      <div className={classes.connectWallatButtonContianer}>
        <Button
          variant="contained"
          className={classes.connectWallatButton}
          onClick={() => setconnetModalIsOpen(true)}
        >
          Connet Wallet
        </Button>
      </div>
      <div className={classes.moreOptionButtonContianer}>
        <Button
          variant="contained"
          className={classes.moreOptionButton}
          onClick={handleClick}
        >
          <MoreOptionIcon className={classes.moreOptionIcon} />
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
            <div>About</div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <div>Help Center</div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <div>Request Featuers</div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <div>Discord</div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <div>Language</div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <div>Docs</div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <div>Legal & Privacy</div>
          </MenuItem>
        </Menu>
      </div>
      <ConnetWalletModal
        isOpen={connetModalIsOpen}
        onClose={() => setconnetModalIsOpen(false)}
      />
    </div>
  );
};
export default RightPart;
