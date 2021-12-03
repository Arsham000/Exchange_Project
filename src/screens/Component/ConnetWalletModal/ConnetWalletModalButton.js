import { Typography, Button } from "@material-ui/core";
import useStyles from "./styles/ConnetWalletModalButton.styles";
const ConnetWalletModalButton = ({ text, Icon }) => {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      <div>
        <Typography variant="body2" className={classes.textStyle}>
          {text}
        </Typography>
      </div>
      {Icon && (
        <div>
          <Icon />
        </div>
      )}
    </Button>
  );
};
export default ConnetWalletModalButton;
