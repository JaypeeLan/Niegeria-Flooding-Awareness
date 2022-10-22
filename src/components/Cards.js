import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";

const Cards = (props) => {
  return (
    <Card
      sx={{ width: 300, maxWidth: 345 }}
      style={{ margin: "10px auto", textAlign: "left" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Account Name: {props.acctName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Account Number : {props.acctNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bank Name: {props.bankName}
        </Typography>
      </CardContent>
      <CardActions>
        <Link target="_blank" href={props.link} size="small">
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
};

export default Cards;
