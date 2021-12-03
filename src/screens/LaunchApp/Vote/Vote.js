import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles/Vote.styles";
import VoteCardList from "./VoteCardList";

const Vote = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <Typography className={classes.headerTitle}>
            Uniswap Governance
          </Typography>
        </div>
        <div>
          <Typography className={classes.headerDescription}>
            UNI tokens represent voting shares in Uniswap governance. You can
            vote on each proposal yourself or delegate your votes to a third
            party.
          </Typography>
        </div>
        <div>
          <Typography>
            <a
              href="https://uniswap.org/blog/uni"
              classNam={classes.headerLink}
            >
              Read more about Uniswap governance
            </a>
          </Typography>
        </div>
      </div>
      <div className={classes.proposalsContianer}>
        <Typography className={classes.proposalsText}>Proposals</Typography>
        <Button variant="contained" className={classes.proposalsButton}>
          Create Proposal
        </Button>
      </div>
      <div className={classes.voteCardList}>
        {moackData.map((item) => (
          <VoteCardList
            description={item.desceription}
            number={item.number}
            type={item.type % 3}
            key={item.desceription}
          />
        ))}
      </div>
      <div>
        <Typography className={classes.bottomPart}>
          A minimum threshold of 0.25% of the total UNI supply is required to
          submit proposals
        </Typography>
      </div>
    </div>
  );
};
export default Vote;
const moackData = [
  {
    number: 1,
    desceription: "Other incision of bone without division, femur",
    type: 1,
  },
  {
    number: 2,
    desceription: "Repair of laryngeal fracture",
    type: 2,
  },
  {
    number: 3,
    desceription: "Division of sympathetic nerve or ganglion",
    type: 3,
  },
  {
    number: 4,
    desceription:
      "Open heart valvuloplasty of tricuspid valve without replacement",
    type: 4,
  },
  {
    number: 5,
    desceription: "Closed reduction of separated epiphysis, tibia and fibula",
    type: 5,
  },
  {
    number: 6,
    desceription: "Sequestrectomy, tarsals and metatarsals",
    type: 6,
  },
  {
    number: 7,
    desceription: "Percutaneous aspiration of kidney (pelvis)",
    type: 7,
  },
];
