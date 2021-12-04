import {
  Button,
  IconButton,
  Modal,
  Paper,
  Slide,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import useStyles from "./styles/SelectTokenModal.styles";
import CloseIcon from "@material-ui/icons/Close";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SelectTokenModalCommonToken from "./SelectTokenModalCommonToken";
import eter from "../../../assets/img/eter.png";
import SelectTokenModalToken from "./SelectTokenModalToken";
const SelectTokenModal = ({ isOpen, onClose, onChangeToken }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.modal}>
          <div className={classes.topPart}>
            <div>
              <Typography color="primary" className={classes.title}>
                Select a token
              </Typography>
            </div>
            <div>
              <IconButton onClick={onClose} className={classes.closeButton}>
                <CloseIcon color="secondary" />
              </IconButton>
            </div>
          </div>
          <div className={classes.searchInputContiner}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search name or paste address"
              className={classes.searchInput}
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
            />
          </div>
          {!isSmallScreen && (
            <div className={classes.commonBasesContainer}>
              <Typography className={classes.commonBasesText}>
                Common bases
              </Typography>
              <Tooltip title="These tokens are commenly paired with others tokens.">
                <HelpOutlineIcon className={classes.helpOutlineIcon} />
              </Tooltip>
            </div>
          )}
          {!isSmallScreen && (
            <div className={classes.commenTokenConianer}>
              {commenToken.map((item) => (
                <SelectTokenModalCommonToken
                  name={item}
                  imgSrc={eter}
                  key={item}
                  onClick={() => {
                    onChangeToken(item);
                    onClose();
                  }}
                />
              ))}
            </div>
          )}
          <div className={classes.allTokenContainer}>
            {allToken.map((item, index) => (
              <SelectTokenModalToken
                name={item.token}
                imgSrc={eter}
                fullname={item.Fullname}
                key={item.token + index.toString()}
                onClick={() => {
                  onChangeToken(item.token);
                  onClose();
                }}
              />
            ))}
          </div>
          <div className={classes.bottomPart}>
            <Button variant="text" className={classes.manageToken}>
              Manage Token Lists
            </Button>
          </div>
        </Paper>
      </Slide>
    </Modal>
  );
};

export default SelectTokenModal;
const commenToken = ["ETH", "SED", "EFDA", "DFDG", "EDM", "NME"];
const allToken = [
  {
    token: "CNY",
    Fullname: "Yuan Renminbi",
  },
  {
    token: "EUR",
    Fullname: "Euro",
  },
  {
    token: "RUB",
    Fullname: "Ruble",
  },
  {
    token: "AFN",
    Fullname: "Afghani",
  },
  {
    token: "CNY",
    Fullname: "Yuan Renminbi",
  },
  {
    token: "IDR",
    Fullname: "Rupiah",
  },
  {
    token: "NGN",
    Fullname: "Naira",
  },
  {
    token: "EUR",
    Fullname: "Euro",
  },
  {
    token: "IDR",
    Fullname: "Rupiah",
  },
  {
    token: "PHP",
    Fullname: "Peso",
  },
  {
    token: "USD",
    Fullname: "Dollar",
  },
  {
    token: "EUR",
    Fullname: "Euro",
  },
  {
    token: "PHP",
    Fullname: "Peso",
  },
  {
    token: "CNY",
    Fullname: "Yuan Renminbi",
  },
  {
    token: "VEF",
    Fullname: "Bolivar",
  },
  {
    token: "RUB",
    Fullname: "Ruble",
  },
  {
    token: "BRL",
    Fullname: "Real",
  },
  {
    token: "CNY",
    Fullname: "Yuan Renminbi",
  },
  {
    token: "PLN",
    Fullname: "Zloty",
  },
  {
    token: "RUB",
    Fullname: "Ruble",
  },
  {
    token: "RUB",
    Fullname: "Ruble",
  },
  {
    token: "CNY",
    Fullname: "Yuan Renminbi",
  },
  {
    token: "EUR",
    Fullname: "Euro",
  },
  {
    token: "PEN",
    Fullname: "Sol",
  },
  {
    token: "CNY",
    Fullname: "Yuan Renminbi",
  },
  {
    token: "EUR",
    Fullname: "Euro",
  },
  {
    token: "BRL",
    Fullname: "Real",
  },
  {
    token: "CNY",
    Fullname: "Yuan Renminbi",
  },
  {
    token: "EUR",
    Fullname: "Euro",
  },
  {
    token: "BRL",
    Fullname: "Real",
  },
];
