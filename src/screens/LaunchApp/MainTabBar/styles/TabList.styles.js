import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(25,27,31)",
    width: "fit-content",
    padding: 4,
    borderRadius: 16,
    display: "grid",
    gridAutoFlow: "column",
    gap: 10,
    overflow: "auto",
    alignItems: "center",
    WebkitBoxAlign: "center",
  },
  tab: {
    display: "flex",
    flexFlow: "row nowrap",
    borderRadius: "3 rem",
    outline: "none",
    cursor: "pointer",
    textDecoration: "none",
    color: "rgb(195,197,203)",
    fontWeight: 500,
    padding: "8px 12px",
    wordBreak: "break-word",
    overflow: "hidden",
    whiteSpace: "nowrap",
    justifyContent: "center",
  },
  activeTab: {
    borderRadius: 12,
    fontWeight: 600,
    WebkitBoxPack: "center",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "rgb(44,47,54)",
  },
}));
export default useStyles;
