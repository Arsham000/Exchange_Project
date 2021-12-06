import { Button, TextField } from "@material-ui/core";
import useStyles from "./styles/SwapInput.styles";
import eter from "../../../assets/img/eter.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SelectTokenModal from "../../Component/SelectTokenModal/SelectTokenModal";
import { useState } from "react";
const SwapInput = ({
  value,
  onChangeValue,
  tokenName,
  onChangeToken,
  imageToken,
  setimageToken,
}) => {
  const classes = useStyles();
  const [selectTokenModalIsOpen, setselectTokenModalIsOpen] = useState(false);
  return (
    <div className={classes.root}>
      <div className={classes.partsContianer}>
        <Button
          onClick={() => setselectTokenModalIsOpen(true)}
          className={
            tokenName ? classes.buttonSelected : classes.buttonNotSelected
          }
        >
          {tokenName && (
            <img
              alt="ETH"
              src={imageToken ? imageToken : eter}
              className={classes.image}
            />
          )}
          <div>{tokenName || "Select a Token"}</div>
          <KeyboardArrowDownIcon />
        </Button>
        <TextField
          variant="outlined"
          className={classes.textFiledContianer}
          InputProps={{ classes: { notchedOutline: classes.textFiled } }}
          value={value}
          onChange={(event) => onChangeValue(event.target.value)}
          placeholder="0.0"
          type="tel"
          inputProps={{
            style: { fontSize: 20, color: "#B1B8D1", textAlign: "right" },
          }}
        />
      </div>
      {value && <div className={classes.showPrice}>{`~$ ${value * 34}`}</div>}
      <SelectTokenModal
        isOpen={selectTokenModalIsOpen}
        onClose={() => setselectTokenModalIsOpen(false)}
        onChangeToken={onChangeToken}
        setimageToken={setimageToken}
      />
    </div>
  );
};
export default SwapInput;
