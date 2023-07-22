const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function populateDatabase() {
  try {
    await client.connect();

    const db = client.db("musics");
    const songsCollection = db.collection("songs");
    const artistsCollection = db.collection("artists");
    const popularSongsCollection = db.collection("popular-songs");

    // Insert songs data
    const songsData = [
      {
        title: "Shape of You",
        artists: ["Ed Sheeran"],
        album: "÷ (Divide)",
      },
      {
        title: "Someone Like You",
        artists: ["Adele"],
        album: "21",
      },
      {
        title: "Uptown Funk",
        artists: ["Mark Ronson", "Bruno Mars"],
        album: "Uptown Special",
      },
      {
        title: "Despacito",
        artists: ["Luis Fonsi", "Daddy Yankee"],
        album: "VIDA",
      },
      {
        title: "Closer",
        artists: ["The Chainsmokers", "Halsey"],
        album: "Collage",
      },
      {
        title: "Thinking Out Loud",
        artists: ["Ed Sheeran"],
        album: "x",
      },
      {
        title: "Sorry",
        artists: ["Justin Bieber"],
        album: "Purpose",
      },
      {
        title: "Hello",
        artists: ["Adele"],
        album: "25",
      },
      {
        title: "See You Again",
        artists: ["Wiz Khalifa", "Charlie Puth"],
        album: "Furious 7: Original Motion Picture Soundtrack",
      },
      {
        title: "Shape of You",
        artists: ["Ed Sheeran"],
        album: "÷ (Divide)",
      },
    ];
    await songsCollection.insertMany(songsData);

    // Insert artists data
    const artistsData = [
      {
        name: "Adele",
        dateOfBirth: "1988-05-05",
        genres: ["Pop", "Soul"],
      },
      {
        name: "Ed Sheeran",
        dateOfBirth: "1991-02-17",
        genres: ["Pop", "Folk"],
      },
      {
        name: "Beyoncé",
        dateOfBirth: "1981-09-04",
        genres: ["R&B", "Pop"],
      },
      {
        name: "Drake",
        dateOfBirth: "1986-10-24",
        genres: ["Hip Hop", "Rap"],
      },
      {
        name: "Taylor Swift",
        dateOfBirth: "1989-12-13",
        genres: ["Pop", "Country"],
      },
      {
        name: "Bruno Mars",
        dateOfBirth: "1985-10-08",
        genres: ["Pop", "R&B"],
      },
      {
        name: "Rihanna",
        dateOfBirth: "1988-02-20",
        genres: ["R&B", "Pop", "Dancehall"],
      },
      {
        name: "Kendrick Lamar",
        dateOfBirth: "1987-06-17",
        genres: ["Hip Hop", "Rap"],
      },
      {
        name: "Billie Eilish",
        dateOfBirth: "2001-12-18",
        genres: ["Pop", "Alternative"],
      },
      {
        name: "Post Malone",
        dateOfBirth: "1995-07-04",
        genres: ["Hip Hop", "Rap", "Pop"],
      },
    ];
    await artistsCollection.insertMany(artistsData);

    // Insert popular songs data
    const popularSongsData = [
      {
        title: "Shape of You",
        playCount: 50000000,
        periodOfTime: "2023-06-01",
      },
      {
        title: "Someone Like You",
        playCount: 48000000,
        periodOfTime: "2023-06-01",
      },
      {
        title: "Uptown Funk",
        playCount: 45000000,
        periodOfTime: "2023-06-01",
      },
      {
        title: "Despacito",
        playCount: 43000000,
        periodOfTime: "2023-06-01",
      },
      {
        title: "Closer",
        playCount: 41000000,
        periodOfTime: "2023-06-01",
      },
      {
        title: "Shape of You",
        playCount: 39000000,
        periodOfTime: "2023-06-01",
      },
      {
        title: "Thinking Out Loud",
        playCount: 38000000,
        periodOfTime: "2023-06-01",
      },
      {
        title: "Sorry",
        playCount: 36000000,
        periodOfTime: "2023-06-01",
      },
      {
        title: "Hello",
        playCount: 35000000,
        periodOfTime: "2023-06-01",
      },
      {
        title: "See You Again",
        playCount: 34000000,
        periodOfTime: "2023-06-01",
      },
    ];
    await popularSongsCollection.insertMany(popularSongsData);

    console.log("Database populated successfully.");
  } catch (error) {
    console.error("Error populating the database:", error);
  } finally {
    await client.close();
  }
}

populateDatabase();
