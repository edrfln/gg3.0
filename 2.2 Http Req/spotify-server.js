const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let playlist = [
  {
    title: "The Kill",
    artists: ["Thirty Seconds to Mars"],
    url: "https://open.spotify.com/track/0lP4HYLmvowOKdsQ7CVkuq?si=c46f2054219a46c5",
  },
  {
    title: "A Match Into Water",
    artists: ["Pierce The Veil"],
    url: "https://open.spotify.com/track/54MXF9I8s3DuiQo3g0gZ5k?si=f85ec7bcc8c64d53",
  },
  {
    title: "Let's Get The Party Started",
    artists: ["Tom Morello", "Bring Me The Horizon"],
    url: "https://open.spotify.com/track/0vFzdbPUKZKZ9Xn9GfvIS7?si=e0d0fcb59bd945b5",
  },
];

app.post("/add-song", (req, res) => {
  const { title, artists, url } = req.body;
  if (!title || !artists || !url) {
    return res.status(400).json({ error: "Invalid song data" });
  }

  const song = { title, artists, url };
  playlist.push(song);
  return res.status(201).json({ message: "Song added to the playlist", song });
});

app.get("/play-song", (req, res) => {
  if (playlist.length === 0) {
    return res.status(404).json({ error: "Playlist is empty" });
  }

  const songToPlay = playlist[0];
  return res.status(200).json({ message: "Playing song", song: songToPlay });
});

app.get("/get-playlist", (req, res) => {
  return res.status(200).json({ playlist });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
