import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    WebkitBoxAlign: "center",
    alignItems: "center",
    justifySelf: "flex-end",
    justifyContent: "flex-end",
  },
  eterContianer: {
    position: "relative",
  },
  eter: {
    alignItems: "center",
    WebkitBoxAlign: "center",
    backgroundColor: "#212429",
    border: "2px solid rgb(33,36,41)",
    borderRadius: 12,
    color: "#fff",
    cursor: "auto",
    display: "flex",
    fontWeight: 500,
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    padding: "6px 8px",
  },
  image: {
    marginRight: 8,
    height: 20,
    width: 20,
  },
  eterName: {
    display: "block",
    marginRight: 8,
  },
  connectWallatButtonContianer: {
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    marginLeft: "0.5em",
    flexDirection: "row",
    whiteSpace: "nowrap",
  },
  connectWallatButton: {
    fontWeight: 500,
    backgroundColor: "rgba(21,61,111,0.44)",
    border: "1px solid rgba(21,61,111,0.44)",
    color: "rgb(80,144,234)",
    borderRadius: "12px !important",
  },
  moreOptionButtonContianer: {
    display: "flex",
    WebkitBoxPack: "center",
    justifyContent: "center",
    WebkitBoxAlign: "center",
    position: "relative",
    border: "none",
    textAlign: "left",
    marginLeft: "0.5em",
  },
  moreOptionButton: {
    margin: 0,
    height: 38,
    backgroundColor: "rgb(25,27,31)",
    border: "1px solid rgb(25,27,31)",
    borderRadius: "12px !important",
    minWidth: 42,
    maxWidth: 42,
  },
  moreOptionIcon: {
    color: "#fff",
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
