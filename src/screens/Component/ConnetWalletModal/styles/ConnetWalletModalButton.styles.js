import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "center",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "rgb(44,47,54)",
    outline: "none",
    border: "1px solid rgb(64,68,54)",
    borderRadius: "12px !important",
    width: "100%",
  },
  textStyle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  image: {
    width: 24,
    height: 24,
  },
}));
export default useStyles;
