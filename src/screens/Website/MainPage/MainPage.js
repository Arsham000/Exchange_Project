import {
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import useStyles from "./styles/MainPage.styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";

const MainPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      <div className={classes.topPart}>
        <span className={classes.topPartBackgroundImage} />
        <span className={classes.topPartBackgroundImageSmall} />
        <Typography className={classes.topPartTitle}>
          UNISWAP PROTOCOL
        </Typography>
        <Typography className={classes.topPartDescription}>
          Swap, earn, and build on the leading decentralized crypto trading
          protocol.
        </Typography>
        <div className={classes.mediaContianer}>
          <IconButton size="small">
            <TwitterIcon className={classes.mediaIcon} />
          </IconButton>
          <IconButton size="small">
            <WhatsAppIcon className={classes.mediaIcon} />
          </IconButton>
          <IconButton size="small">
            <GitHubIcon className={classes.mediaIcon} />
          </IconButton>
        </div>
      </div>
      {!isSmallScreen && (
        <div className={classes.numberInfoContainer}>
          <div className={classes.numbersPartContianer}>
            <Typography className={classes.numbersPartValue}>$645B+</Typography>
            <Typography className={classes.numbersPartTitle}>
              Trade Volume
            </Typography>
          </div>
          <div className={classes.numbersPartContianer}>
            <Typography className={classes.numbersPartValue}>80M+</Typography>
            <Typography className={classes.numbersPartTitle}>
              All Time Trades
            </Typography>
          </div>
          <div className={classes.numbersPartContianer}>
            <Typography className={classes.numbersPartValue}>300+</Typography>
            <Typography className={classes.numbersPartTitle}>
              Integrations
            </Typography>
          </div>
          <div className={classes.numbersPartContianer}>
            <Typography className={classes.numbersPartValue}>4,400+</Typography>
            <Typography className={classes.numbersPartTitle}>
              Community Delegates
            </Typography>
          </div>
        </div>
      )}
      <section className={classes.section}>
        <div className={classes.sectionChild}>
          <div className={classes.sectionChildTextContianer}>
            <Typography className={classes.sectionChildTextLink}>
              UNISWAP ECOSYSTEM →
            </Typography>
            <Typography className={classes.sectionChildTextTitle}>
              A growing network of DeFi Apps.
            </Typography>
            <Typography className={classes.sectionChildTextDescription}>
              Developers, traders, and liquidity providers participate together
              in a financial marketplace that is open and accessible to all.
            </Typography>
          </div>
          <div
            className={classes.sectionChildImageContianer}
            style={{
              background: `url(${"https://uniswap.org/images/apps.png"}) 0 0 / cover no-repeat`,
            }}
          >
            <div className={classes.integrationsData}>
              <Typography className={classes.sectionChildTextTitle}>
                300+
              </Typography>
              <Typography className={classes.sectionChildTextDescription}>
                Integrations
              </Typography>
              <div>
                <Button variant="contained" className={classes.exploreAll}>
                  Explore all ↗
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.secondSection}>
        <Typography className={classes.secondSectionTitle}>
          DEVELOPERS →
        </Typography>
        <div className={classes.secondSectionChildContainer}>
          <div className={classes.secondSectionLeftChild}>
            <div className={classes.secondSectionLeftTopChild}>
              <div className={classes.secondSectionLeftTopChildTextContianer}>
                <Typography
                  className={classes.secondSectionLeftTopChildTextTitle}
                >
                  Superpowers for DeFi developers.
                </Typography>
                <Typography
                  className={classes.secondSectionLeftTopChildTextDescription}
                >
                  Build Defi apps and tools on the largest crypto project on
                  Ethereum. Get started with quick start guides, protocol
                  documentation, a Javascript SDK, and fully open source code.{" "}
                </Typography>
                <div>
                  <Button variant="contained" className={classes.exploreAll}>
                    Documentation ↗
                  </Button>
                </div>
              </div>
            </div>
            <div className={classes.secondSectionLeftBottomChild}>
              <Button
                variant="contained"
                fullWidth
                className={classes.exploreAll}
              >
                V3 Whitepaper
              </Button>
              <Button
                variant="contained"
                fullWidth
                className={classes.exploreAll}
              >
                Github
              </Button>
            </div>
          </div>
          <div className={classes.secondSectionRightChild}>
            <div>
              <img
                alt="crown"
                src="https://uniswap.org/_next/image?url=%2Fimages%2Funigrants.png&w=128&q=75"
              />
            </div>
            <div className={classes.secondSectionRightTextContianer}>
              <Typography className={classes.secondSectionRightTextTitle}>
                Apply for funding from the Uniswap Grants Program
              </Typography>
              <Typography className={classes.secondSectionRightTextDescription}>
                Get paid to build the future of finance. Uniswap Governance
                offers grant funding for people building apps, tools, and
                activities on the Uniswap Protocol.
              </Typography>
              <div>
                <Button variant="contained" className={classes.exploreAll}>
                  Learn more ↗
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.thirdSection}>
        <Typography
          className={classes.thirdSectionTitle}
        >{`PROTOCOL GOVERNANCE ->`}</Typography>
        <div className={classes.governanceContianer}>
          <div className={classes.leftPartContianer}>
            <div className={classes.leftPartTextContianer}>
              <Typography className={classes.leftPartTextTitle} variant="h3">
                Governed by the community.
              </Typography>
              <Typography className={classes.leftPartTextDescription}>
                The Uniswap Protocol is managed by a global community of UNI
                token holders and delegates.
              </Typography>
            </div>
            <div>
              <Button variant="contained">Read more ↗</Button>
            </div>
          </div>
          <nav className={classes.navRightParts}>
            <div className={classes.navRightPartContianer}>
              <Typography className={classes.navRightPartTitle}>
                Governance Forum
              </Typography>
              <Typography className={classes.navRightPartDescription}>
                Participate by proposing upgrades and discussing the future of
                the protocol with the Uniswap community.
              </Typography>
            </div>
            <div className={classes.navRightPartContianer}>
              <Typography className={classes.navRightPartTitle}>
                Sybil
              </Typography>
              <Typography className={classes.navRightPartDescription}>
                Vote on offchain proposals with the Snapshot interface. Votes
                are weighted by the number of UNI delegates.
              </Typography>
            </div>
            <div className={classes.navRightPartContianer}>
              <Typography className={classes.navRightPartTitle}>
                Governance Portal
              </Typography>
              <Typography className={classes.navRightPartDescription}>
                Vote on official Uniswap governance proposals and view past
                proposals.
              </Typography>
            </div>
          </nav>
        </div>
      </section>
      <footer className={classes.footer}>
        <div className={classes.footerLeftPart}>
          <Typography className={classes.footerLeftPartText}>
            Ecosystem
          </Typography>
          <Typography className={classes.footerLeftPartText}>
            Community
          </Typography>
          <Typography className={classes.footerLeftPartText}>
            Governance
          </Typography>
          <Typography className={classes.footerLeftPartText}>
            Developers
          </Typography>
          <Typography className={classes.footerLeftPartText}>Blog</Typography>
          <Typography className={classes.footerLeftPartText}>FAQ</Typography>
        </div>
        <div className={classes.mediaContianer}>
          <IconButton size="small">
            <TwitterIcon className={classes.mediaIcon} />
          </IconButton>
          <IconButton size="small">
            <WhatsAppIcon className={classes.mediaIcon} />
          </IconButton>
          <IconButton size="small">
            <GitHubIcon className={classes.mediaIcon} />
          </IconButton>
        </div>
      </footer>
    </div>
  );
};
export default MainPage;
