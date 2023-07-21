const songData = [
  {
    title: "song title",
    artists: [{ name: "artist name 1" }],
    duration: 200,
  },
];

function getSongList() {
  return new Promise((resolve, reject) => {
    if (songData.length > 0) {
      resolve(songData);
    } else {
      reject("No songs found.");
    }
  });
}

getSongList()
  .then((songs) => {
    console.log(songs);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
