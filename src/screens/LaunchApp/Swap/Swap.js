import { Button, IconButton, Menu, Typography } from "@material-ui/core";
import useStyles from "./styles/Swap.styles";
import SettingsIcon from "@material-ui/icons/Settings";
import SwapInput from "./SwapInput";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useState } from "react";
import ConnetWalletModal from "../../Component/ConnetWalletModal/ConnetWalletModal";
const Swap = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [connectModalIsOpen, setconnectModalIsOpen] = useState(false);
  const [fistInputValue, setfistInputValue] = useState("");
  const [firstInputToken, setfirstInputToken] = useState("ETH");
  const [secondInputToken, setsecondInputToken] = useState("");
  const [secondInputValue, setsecondInputValue] = useState("");
  const [firstImageToken, setfirstImageToken] = useState("");
  const [secondImageToken, setsecondImageToken] = useState("");
  const handleSwap = () => {
    const token1 = firstInputToken;
    const token2 = secondInputToken;
    const imageToken1 = firstImageToken;
    const imageToken2 = secondImageToken;
    const value1 = fistInputValue;
    const value2 = secondInputValue;
    setsecondInputValue(value1);
    setfistInputValue(value2);
    setsecondInputToken(token1);
    setfirstInputToken(token2);
    setfirstImageToken(imageToken1);
    setsecondImageToken(imageToken2);
  };

  return (
    <div className={classes.pageContianer}>
      <div className={classes.root}>
        <div className={classes.topPart}>
          <Typography variant="body2" className={classes.title} color="primary">
            Swap
          </Typography>
          <div>
            <IconButton onClick={handleClick}>
              <SettingsIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              classes={{ paper: classes.settingMenuPaper }}
              className={classes.settingMenu}
              MenuListProps={{
                classes: { root: classes.settingMenuRoot },
              }}
            ></Menu>
          </div>
        </div>
        <div className={classes.inputsContainer}>
          <SwapInput
            value={fistInputValue}
            onChangeValue={setfistInputValue}
            tokenName={firstInputToken}
            onChangeToken={setfirstInputToken}
            imageToken={firstImageToken}
            setimageToken={setfirstImageToken}
          />
          <IconButton className={classes.swapIconButton} onClick={handleSwap}>
            <ArrowDownwardIcon className={classes.swapIcon} />
          </IconButton>
          <SwapInput
            value={secondInputValue}
            onChangeValue={setsecondInputValue}
            tokenName={secondInputToken}
            onChangeToken={setsecondInputToken}
            imageToken={secondImageToken}
            setimageToken={setsecondImageToken}
          />
          <Button
            fullWidth
            className={classes.connectWallet}
            onClick={() => setconnectModalIsOpen(true)}
          >
            Connect Wallet
          </Button>
        </div>
      </div>
      <ConnetWalletModal
        isOpen={connectModalIsOpen}
        onClose={() => setconnectModalIsOpen(false)}
      />
    </div>
  );
};
export default Swap;
