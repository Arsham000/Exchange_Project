import { Typography } from "@material-ui/core";
import useStyles from "./styles/VoteCardList.styles";

const VoteCardList = ({ number, description, type }) => {
  const classes = useStyles();
  const customClass =
    type === 0
      ? classes.executed
      : type === 1
      ? classes.canceled
      : classes.defeated;
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.number}>{number}</Typography>
      </div>
      <Typography className={classes.description}>{description} </Typography>
      <div className={[classes.button, customClass].join(" ")}>
        <Typography>
          {type === 0 ? "Executed" : type === 1 ? "Canceled" : "Defeated"}
        </Typography>
      </div>
    </div>
  );
};
export default VoteCardList;
