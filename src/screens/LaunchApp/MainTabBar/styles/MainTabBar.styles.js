import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    zIndex: 2,
  },
  partsContianer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    WebkitBoxAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    top: 0,
    padding: "1rem",
    zIndex: 21,
    position: "relative",
    backgroundImage: "liner-gradient(transparent 50%, rgb(25,27,31) 50%)",
    backgroundPosition: "0 0",
    backgroundSize: "100% 200%",
    boxShadow: "transparent 0 0 0 1px",
  },
  tabListContianer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default useStyles;
