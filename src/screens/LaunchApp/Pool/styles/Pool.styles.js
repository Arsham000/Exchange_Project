import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  pageContianer: {
    display: "flex",
    padding: "120px 16px 0",
    alignItems: "center",
    flex: "1 1 0",
    zIndex: 1,
    WebkitBoxAlign: "center",
  },
  root: {
    position: "relative",
    maxWidth: 870,
    width: "100%",
    // backgroundColor: "rgb(25,27,31)",
    boxShadow:
      "rgb(0 0 0 / 1%) 0 0 1px, rgb(0 0 0 / 4%) 0 4px 8px, rgb(0 0 0 / 4%) 0 16px 24px, rgb(0 0 0 / 1%) 0 24px 32p",
    borderRadius: 24,
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 1,
  },
  tapPart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
  },
  moreOption: {
    backgroundColor: "rgb(25,27,31)",
    padding: "6px 8px",
    borderRadius: "12px !important",
    marginRight: 8,
    color: "#fff",
    flex: "1 1 auto",
    "&:hover": {
      backgroundColor: "rgba(25,27,31,0.8)",
    },
  },
  newPostion: {
    backgroundColor: "rgb(33,114,229)",
    padding: "6px 8px",
    borderRadius: "12px !important",
    color: "#fff",
    width: "fitContent",
    "&:hover": {
      backgroundColor: "rgba(33,114,229,0.8)",
    },
  },
  bodyPart: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 8,
    marginTop: 8,
  },
  learnMore: {
    background:
      "radial-gradient(92.78% 103.09% at 50.06% 7.22%, rgba(255, 58, 212, 0.07) 0, rgba(255, 255, 255, 0.043) 100%), radial-gradient(100% 97.16% at 0 12.22%, rgba(235, 0, 255, 0.2) 0, rgba(243, 19, 19, 0.2) 100%)",
    display: "flex",
    padding: "2rem",
    borderRadius: 20,
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    overflow: "hidden",
    border: "1px solid transparent",
    gap: 12,
  },
  learnMoreTextContianer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
  },
  learnMoreTitle: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#fff",
    fontWeight: 600,
    textAlign: "left",
  },
  learnMoreDescription: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 300,
  },
  toolTip: {
    background:
      "radial-gradient(92.78% 103.09% at 50.06% 7.22%, #3A3538 0, #28212A 100%), radial-gradient(100% 97.16% at 0 12.22%, #3A3538 0, #28212A 100%)",
    display: "flex",
    padding: "2rem",
    borderRadius: 20,
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    overflow: "hidden",
    border: "1px solid transparent",
    gap: 12,
  },
  bottomPartContianer: {
    backgroundColor: "rgb(25,27,31)",
    padding: 8,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  bottomPart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    maxWidth: 300,
    minHeight: "25vh",
  },
  button: {
    marginTop: "2em",
    padding: "8px 16px",
    backgroundColor: "rgb(33,114,229)",
    color: "#fff",
    borderRadius: "20px !important",
    "&:hover": {
      backgroundColor: "rgba(33,114,229,0.8)",
    },
  },
  icon: {
    fontSize: 48,
    color: "rgb(143,150,172)",
  },
  bottomPartText: {
    color: "rgb(143,150,172)",
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
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
    color: "white",
  },
  moreOptionMenu: {
    top: "60px !important",
  },
  moreOptionMenuPaper: {
    backgroundColor: "transparent",
    borderRadius: "12px !important",
  },
}));
export default useStyles;