import { Typography } from "@material-ui/core";
import useStyles from "./styles/SelectTokenModalCommonToken.styles";
const SelectTokenModalCommonToken = ({ name, imgSrc, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={onClick}>
      <img src={imgSrc} alt={name} className={classes.image} />
      <Typography>{name}</Typography>
    </div>
  );
};
export default SelectTokenModalCommonToken;
