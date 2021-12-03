import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: 56,
    padding: "4px 20px",
    display: "grid",
    gridTemplateColumns: "auto minmax(auto, 1fr) auto minmax(0px, 72px)",
    gap: 16,
    cursor: "pointer",
    opacity: 1,
    "&:hover": {
      backgroundColor: "rgb(64,68,79)",
    },
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 24,
    boxShadow: "rgb(0 0 0 / 8%) 0 6px 10px",
    marginRight: 8,
  },
  name: {
    fontWeight: 500,
    color: "#fff",
  },
  fullname: {
    fontSize: 12,
    fontWeight: 300,
    color: "rgb(143, 150, 172)",
  },
  nameContianer: {
    display: "flex",
    flexDirection: "column",
  },
}));
export default useStyles;
