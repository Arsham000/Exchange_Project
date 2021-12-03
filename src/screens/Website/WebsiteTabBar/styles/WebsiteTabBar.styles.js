import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "row",
    WebkitBoxPack: "center",
    justifyContent: "center",
    WebkitBoxAlign: "center",
    alignItems: "center",
    boxShadow: "border-box",
    padding: "1rem 1rem",
    // width: "100%",
    zIndex: 3,
    position: "sticky",
    top: -1,
    left: -1,
    backdropFilter: "blur(4px)",
    background: "none",
    transition: "background-color 0.25s ease 0s",
  },
  root: {
    width: "100%",
    maxWidth: 1600,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabPart: {
    color: "#fff",
    padding: "1rem",
    transition: "color .2s ease-in-out",
    textDecoration: "inherit",
    opacity: 0.6,
  },
  activeTab: {
    opacity: 1,
  },
  button: {
    background: "#D10568",
    borderRadius: "10px !important",
    color: "rgba(255,255,255,0.9)",
    paddingTop: "0.6rem",
    paddingBottom: "0.6rem",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));
export default useStyles;
