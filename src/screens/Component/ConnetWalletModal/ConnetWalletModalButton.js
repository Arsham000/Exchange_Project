/* eslint-disable jsx-a11y/alt-text */
import { Typography, Button } from "@material-ui/core";
import useStyles from "./styles/ConnetWalletModalButton.styles";
const ConnetWalletModalButton = ({ text, img }) => {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      <div>
        <Typography variant="body2" className={classes.textStyle}>
          {text}
        </Typography>
      </div>
      {img && (
        <div>
          <img src={img} className={classes.image} />
        </div>
      )}
    </Button>
  );
};
export default ConnetWalletModalButton;
