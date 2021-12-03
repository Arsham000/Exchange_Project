import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid rgb(64, 68, 79)",
    borderRadius: 10,
    display: "flex",
    padding: 6,
    alignItems: "center",
    color: "rgb(143,150,172)",
    filter: "grayscale(1)",
    "&:hover": {
      backgroundColor: "rgb(64,68,79)",
      borderColor: "transparent",
    },
    margin: 4,
    cursor: "pointer",
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 24,
    boxShadow: "rgb(0 0 0 / 8%) 0 6px 10px",
    marginRight: 8,
  },
}));
export default useStyles;
