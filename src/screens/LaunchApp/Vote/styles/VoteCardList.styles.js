import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 640,
    padding: "0.75rem 1rem",
    width: "100%",
    marginTop: "1rem",
    borderRadius: "12px",
    display: "flex",
    cursor: "pointer",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    outline: "none",
    color: "#fff",
    textDecoration: "none",
    backgroundColor: "rgb(33,36,41)",
  },
  number: {
    opacity: 0.6,
    flex: "0 0 40px",
    [theme.breakpoints.down("sm")]: {
      marginRight: 10,
    },
  },
  description: {
    fontWeight: 600,
    flex: "1 1 0",
    maxWidth: 420,
    whiteSpace: "initial",
    overflowWrap: "break-word",
    paddingRight: 10,
    textAlign: "left",
  },
  button: {
    fontSize: "0.825rem",
    fontWeight: 600,
    padding: "0.5rem",
    borderRadius: 8,
    border: "1px solid",
    width: "fit-content",
    justifySelf: "flex-end",
    textDecoration: "uppercase",
    flex: "0 0 100px",
    textAlign: "center",
  },
  executed: {
    color: "rgb(39,174,96)",
    borderColor: "rgb(39,174,96)",
  },
  canceled: {
    color: "rgb(143,150,172)",
    borderColor: "rgb(143,150,172)",
  },
  defeated: {
    color: "rgb(255,67,67)",
    borderColor: "rgb(255,67,67)",
  },
}));
export default useStyles;
