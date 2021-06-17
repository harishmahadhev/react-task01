import "./styles.css";
import { users } from "./json";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Roboto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  avatar2: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  avatar2: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "space-between"
  }
}));
export default function User() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Grid container spacing={2}>
          {users.map((user) => (
            <Grid item xs={6} sm={12} key={user.id}>
              <Cards user={user} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

function Cards({ user }) {
  const classes = useStyles();
  return (
    <Accordion>
      <CardContent
        className={classes.avatar3}
        style={{ cursor: "context-menu" }}
      >
        <span className={classes.avatar2}>
          <div className={classes.avatar2}>
            <Avatar src={user.avatar}></Avatar>
            <div className={classes.avatar}>
              <Typography variant="h6" component="h4">
                {user.name}
              </Typography>
              <Typography
                style={{ fontSize: "10px" }}
                gutterBottom
                variant="body"
                component="p"
              >
                ({user.Job})
              </Typography>
            </div>
          </div>
          <AccordionSummary>
            <Button color="primary" disableRipple>
              Learn More
            </Button>
          </AccordionSummary>
        </span>
      </CardContent>
      <AccordionDetails>
        <Typography color="textSecondary" component="p" variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
