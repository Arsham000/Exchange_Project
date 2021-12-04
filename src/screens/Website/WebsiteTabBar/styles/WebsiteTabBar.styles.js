import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down("sm")]: {
      padding: "12px 1rem",
      height: "100%",
    },
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
  buttonContainer: {
    textDecoration: "none",
  },
  menuButton: {
    padding: "8px 16px",
    borderRadius: 12,
    display: "inline-block",
    border: "2px solid transparent",
    boxShadow: "rgb(53 55 58) 1px 1000px 1px inset",
    opacity: 0.9,
    backgroundColor: "rgba(255,255,255,0.1) !important",
    color: "#fff",
    width: "fit-content",
    fontSize: "1rem",
    fontWeight: 400,
    height: "fit-content",
  },
  moreOptionMenuRoot: {
    overflow: "hidden",
    backgroundColor: "rgb(33,36,41)",
    paddnig: "0px !important",
    // boxShadow:
    // "rgb(0 0 0 / 1%) 0 0px 1px, rgb(0 0 0 / 4%) 0 4px 8px, rgb(0 0 0 / 4%) 0 16px 24px, rgb(0 0 0 / 1%) 0 24px 32px;",
    border: "1px solid rgb(25,27,31)",
    borderRadius: "12px !important",
    padding: "0.5rem",
    height: "100%",
    color: "#fff",
  },
  moreOptionMenu: {
    top: "48px !important",
  },
  moreOptionMenuPaper: {
    backgroundColor: "transparent",
    borderRadius: "12px !important",
  },
}));
export default useStyles;
