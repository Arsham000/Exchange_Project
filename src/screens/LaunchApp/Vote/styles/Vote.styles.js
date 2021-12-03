import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "120px 16px 0",
    alignItems: "center",
    flex: "1 1 0",
    zIndex: 1,
  },
  header: {
    maxWidth: 640,
    width: "100%",
    background:
      "radial-gradient(76.02% 75.41% at 1.84% 0%, rgb(39, 174, 96) 0%, rgb(0, 0, 0) 100%)",
    overflow: "hidden",
    display: "grid",
    gridAutoRows: "auto",
    rowGap: 12,
    borderRadius: 12,
    padding: "1rem",
  },
  headerTitle: {
    fontWeight: 600,
    color: "#fff",
  },
  headerDescription: {
    fontWeight: 500,
    color: "#fff",
    fontSize: 14,
  },
  headerLink: {
    color: "white",
    textDecoration: "underline",
    fontWeight: 500,
    cursor: "pointer",
  },
  proposalsContianer: {
    marginTop: 25,
    marginBottom: 10,
    maxWidth: "calc( 640px + 1.5rem )",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  proposalsButton: {
    backgroundColor: "rgb(33,114,229)",
    color: "#fff",
    fontWeight: 500,
    borderRadius: "8px !important",
    "&:hover": {
      backgroundColor: "rgba(33,114,229,0.8)",
    },
  },
  proposalsText: {
    fontWeight: 500,
    fontSize: 20,
    color: "#fff",
  },
  voteCardList: {
    width: "100%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bottomPart: {
    margin: "1rem 0",
    fontWeight: 400,
    fontSize: 14,
    color: "rgb(143,150,172)",
  },
}));
export default useStyles;
