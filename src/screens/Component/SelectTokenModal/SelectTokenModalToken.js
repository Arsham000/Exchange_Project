import { Typography } from "@material-ui/core";
import useStyles from "./styles/SelectTokenModalToken.styles";
const SelectTokenModalToken = ({ name, imgSrc, onClick, fullname }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={onClick}>
      <img src={imgSrc} alt={name} className={classes.image} />
      <div className={classes.nameContianer}>
        <Typography variant="none" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="none" className={classes.fullname}>
          {fullname}
        </Typography>
      </div>
    </div>
  );
};
export default SelectTokenModalToken;
