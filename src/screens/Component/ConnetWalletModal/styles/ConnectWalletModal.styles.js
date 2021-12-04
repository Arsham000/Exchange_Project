import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  modal: {
    margin: "auto",
    marginTop: "10vh",
    backgroundColor: "rgb(25,27,31)",
    border: "1px solid rgb(33,36,41)",
    boxShadow: "rgb(0 0 0 / 5%) 0 4px 8px 0",
    padding: 0,
    width: "50vw",
    overflow: "hidden auto",
    alignSelf: "center",
    maxWidth: 420,
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      // maxHeight: "60vh",
    },
  },
  topPart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    // marginRight: "1rem",
    marginLeft: "1rem",
  },
  title: {
    fontWeight: "bold",
  },
  body: {
    padding: "0 1rem 1rem",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "rgb(25,27,31)",
  },
  partContianer: {
    display: "grid",
    gridAutoRows: "auto",
    rowGap: 16,
  },
  descriptionContianer: {
    border: "1px solid rgb(44,47,54)",
    backgroundColor: "rgb(33,36,41)",
    padding: "1rem",
    borderRadius: 16,
  },
  description: {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    fontWeight: 500,
    fontSize: 14,
    color: "#fff",
  },
  howThisAppContainer: {
    backgroundColor: "rgb(33,114,229)",
    cursor: "pointer",
    color: "#fff",
    padding: "0.5rem",
    borderRadius: "0.75rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexDirection: {
    display: "flex",
    columnGap: 5,
    // justifyContent: "center",
  },
  warnnigIcon: {
    fontSize: 20,
  },
  arrowIcon: {
    fontSize: 19,
  },
}));
export default useStyles;
