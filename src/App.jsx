import "./App.css";
import React from "react";
import CrownImage from "./images/logo.webp";
import DiscordImage from "./images/discord.webp";
import FormsImage from "./images/forms.webp";
import RATMediaImage from "./images/rmg.webp";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function App() {

  const [onlinePlayersNo, setOnlinePlayersNo] = React.useState(0);
  const [maxPlayersNo, setMaxPlayersNo] = React.useState(100);
  const [isOpen, setOpen] = React.useState(false);

  const RefreshPlayers = () => {

    fetch("https://api.minetools.eu/ping/141.95.143.92/25578").then(res => res.json()).then((result) => {

      setOnlinePlayersNo(result.players.online);
      setMaxPlayersNo(result.players.max);

    });

  };

  const ClickHandler = () => {

    if(isOpen === true) return;
    setOpen(true);
    navigator.clipboard.writeText("play.crownsmp.org");

  };

  const OnClose = (event, reason) => {

    if(reason === "clickaway") return;

    setOpen(false);

  };

  setInterval(RefreshPlayers, 1000);

  return (

    <main>

      <Typography className="title" variant="h1" component="div">

        CrownSMP

      </Typography>

      <img className="crown" src={CrownImage} />

      <Typography className="subtitle" variant="h2" component="div">
        
        👑 Semi-Vanilla 👑 Plugins 👑 Datapacks 👑 13+ 👑

      </Typography>

      <div id="online-players">

        <Typography className="op-text" variant="h5" component="div">

          There are {onlinePlayersNo}/{maxPlayersNo} players online

        </Typography>

      </div>

      <Button className="copy_ip_button" variant="contained" onClick={ClickHandler}>

        Copy IP

      </Button>

      <div id="cards">

        {/* This is the Discord Card */}
        <Card className="left-card" sx={{ maxWidth: 345 }}>

          <CardMedia component="img" height="140" image={DiscordImage} alt="Discord?" />

          <CardContent>

            <Typography gutterBottom className="card-title" variant="h5" component="div">

              Join Our Discord

            </Typography>

            <Typography variant="body2" className="card-subtitle" color="text.secondary">

              Our Discord Server is a great place you can join to chat with fellow players,
              find out more information about the server and report players who are not following
              the rules. Join today!

            </Typography>

            <CardActions className="card-buttons">

              <Button className="link-text" href="https://discord.gg/75pZevbCZ6" size="small">Join</Button>

            </CardActions>

          </CardContent>

        </Card>

        {/* This is the Application Card */}
        <Card className="middle-card" sx={{ maxWidth: 345 }}>

          <CardMedia component="img" height="140" image={FormsImage} alt="Discord?" />

          <CardContent>

            <Typography gutterBottom className="card-title" variant="h5" component="div">

              Apply for Whitelist

            </Typography>

            <Typography variant="body2" className="card-subtitle" color="text.secondary">

              Before you are allowed to join the server, you will need to make an application
              to be whitelisted. The form is a short set of questions that you will easily be
              able to answer.

            </Typography>

            <CardActions className="card-buttons">

              <Button className="link-text" href="https://forms.gle/pQotRqk1jeGM3zaa8" size="small">Apply</Button>

            </CardActions>

          </CardContent>

        </Card>

        {/* This is the RAT Media Group Card */}
        <Card className="right-card" sx={{ maxWidth: 345 }}>

          <CardMedia component="img" height="140" image={RATMediaImage} alt="Discord?" />

          <CardContent>

            <Typography gutterBottom className="card-title" variant="h5" component="div">

              RAT Media Group

            </Typography>

            <Typography variant="body2" className="card-subtitle" color="text.secondary">

              The CrownSMP Project is proud to be a part of the RAT Media Group family.
              Please consider taking a look at our other projects and becoming a member
              of our family today!

            </Typography>

            <CardActions className="card-buttons">

              {/* http://andrewh258.sg-host.com/ for when andy fixes the fkin site. */}

              <Button className="link-text" size="small">Coming Soon</Button>

            </CardActions>

          </CardContent>

        </Card>

      </div>

      <Snackbar open={isOpen} autoHideDuration={3000} onClose={OnClose}>

        <Alert onClose={OnClose} severity="success" sx={{ width: "100%" }}>

          The IP has been copied to your clipboard!

        </Alert>

      </Snackbar>

    </main>

  )
}

export default App