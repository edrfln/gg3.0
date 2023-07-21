const songData = [
  {
    title: "song title 1",
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

async function printSongList() {
  try {
    const songs = await getSongList();
    console.log("Song list:");
    songs.forEach((song) => {
      console.log(`Title: ${song.title}`);
      console.log(`Artist: ${song.artists[0].name}`);
      console.log(`Duration: ${song.duration}`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

printSongList();
