import "./styles.css";
import Users from "./users";
import { Container, Typography } from "@material-ui/core";
export default function App() {
  return (
    <Container className="App">
      <Typography
        gutterBottom
        variant="h3"
        component="h3"
        style={{ textTransform: "uppercase" }}
      >
        User Details
      </Typography>
      <Users />
    </Container>
  );
}
