import './App.css';
import React from "react";
import CrownImage from "./images/crown.png";
import DiscordImage from "./images/discord.png";
import FormsImage from "./images/forms.webp";
import RATMediaImage from "./images/rmg.png";

import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function App() {

  const [onlinePlayersNo, setOnlinePlayersNo] = React.useState(0);
  const [maxPlayersNo, setMaxPlayersNo] = React.useState(100);

  const RefreshPlayers = () => {

    fetch("https://api.minetools.eu/ping/141.95.143.92/25578").then(res => res.json()).then((result) => {

      setOnlinePlayersNo(result.players.online);
      setMaxPlayersNo(result.players.max);

    });

    console.log("Refreshed data.");

  };

  setInterval(RefreshPlayers, 1000);

  return (

    <main>

      <Typography className="title" variant="h1" component="div">

        CrownSMP

      </Typography>

      <img className="crown" src={CrownImage} />

      <Typography className="subtitle" variant="h2" component="div">

        Semi-Vanilla Minecraft SMP

      </Typography>

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

              <Button className="link-text" href="http://andrewh258.sg-host.com/" size="small">Check us out</Button>

            </CardActions>

          </CardContent>

        </Card>

      </div>

      <div id="online-players">

        <Typography className="op-text" variant="h6" component="div">

          There are {onlinePlayersNo}/{maxPlayersNo} players online.

        </Typography>

      </div>

      <div>

        <Typography className="footer" variant="h6" component="div">

          CrownSMP, a Minecraft Server by RAT Media Group.

        </Typography>

      </div>

    </main>

  )
}

export default App
