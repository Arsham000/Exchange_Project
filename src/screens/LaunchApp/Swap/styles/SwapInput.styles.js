import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    position: "relative",
    borderRadius: 20,
    width: "100%",
    backgroundColor: "rgb(33,36,41)",
    zIndex: 1,
    // width: "initial",
    border: "1px solid rgb(44,47,54)",
  },
  partsContianer: {
    display: "flex",
    flexFlow: "row nowrap",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    padding: "0.75rem 0.75rem 0.75rem",
  },
  textFiled: {
    outline: "none !important",
    border: "none !important",
  },
  textFiledContianer: {
    display: "flex",
    // width: "100%",
    flex: 5,
    fontSize: 20,
    color: "#fff",
  },
  buttonSelected: {
    display: "flex",
    alignItems: "center",
    flex: 2,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgb(25,27,31)",
    color: "#fff",
    borderRadius: 16,
    boxShadow: "rgb(0 0 0 / 8%) 0 6px 10px",
    outline: "none",
    width: "100%",
    height: "2.4rem",
    userSelect: "none",
    border: "none",
    padding: "0 8px",
    justifyContent: "space-between",
    marginRight: 12,
    gap: 20,
    "&:hover": {
      backgroundColor: "rgb(25,27,25)",
    },
  },
  buttonNotSelected: {
    visibility: "visible",
    alignItems: "center",
    // fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgb(33,114,229)",
    color: "#fff",
    borderRadius: "16px !important",
    boxShadow: "rgb(0 0 0 / 8%) 0 6px 10px",
    outline: "none",
    height: "2.4rem",
    border: "none",
    padding: "0 8px",
    justifyContent: "space-between",
    marginRight: 12,
    "&:hover": {
      backgroundColor: "rgb(11,114,255)",
    },
  },
  image: {
    width: 24,
    height: 24,
  },
  showPrice: {
    marginTop: "-1rem",
    display: "flex",
    flexFlow: "row nowarp",
    alignItems: "center",
    color: "#fff",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    padding: "0 1rem 1rem",
    textAlign: "right",
    flexDirection: "row-reverse",
  },
}));
export default useStyles;
